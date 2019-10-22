import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dishes_in_cart:any[] = [];

  cart_length_subject = new Subject<number>();
  private dishes_in_cart_subject = new Subject<any[]>();

  constructor(private http:HttpClient, private config:ConfigService) { }

  emitDishesInCart() {
    this.dishes_in_cart_subject.next(this.dishes_in_cart.slice())
  }

  emitCartLength() {
    this.cart_length_subject.next(this.dishes_in_cart.length)
  }

  getDishes() {
    return this.http.get(this.config.getApiHostAddress()+"/plat");
  }

  getDishById(dish_id:number) {
    return this.http.get<any>(this.config.getApiHostAddress()+"/plat/"+dish_id)
  }

  getMenu() {
    return this.http.get(this.config.getApiHostAddress()+"/plats-au-menu");
  }

  addDishToCart(dish_id:number) {

    this.getDishById(dish_id).subscribe(
      (received_dish) => {
          this.dishes_in_cart.push(received_dish) 
          this.emitDishesInCart()
          this.emitCartLength()
      }
    )
  }

  getDishesInCart() {
    return this.dishes_in_cart
  }

}
