import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { ToastController } from "@ionic/angular";

export interface CartContent {
  id:number;
  nom:string;
  prix:number;
  au_menu:boolean;
  image:string;
  description:string;
  qte:number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dishes_in_cart:CartContent[] = [];
  private bill_total:number = 0;

  bill_total_subject = new Subject<number>();
  cart_length_subject = new Subject<number>();
  private dishes_in_cart_subject = new Subject<any[]>();

  constructor(
    private http:HttpClient, 
    private config:ConfigService,
    private toastController:ToastController) { }

  emitBillTotal() {
    this.bill_total_subject.next(this.bill_total)
  }

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

  addDishToCart(dish_id:number, dish_qte:number) {

    this.getDishById(dish_id).subscribe(
      (received_dish) => {
        if (this.dishes_in_cart.length == 0) {    
          received_dish.qte = dish_qte
          this.dishes_in_cart.push(received_dish) 
          this.emitDishesInCart()
          this.emitCartLength()
          this.emitBillTotal()
          this.presentToast("Ajouté", 1000, 'middle')
        } else {
          received_dish.qte = dish_qte
          if (this.dishAlreadyInCart(this.dishes_in_cart, received_dish)) {
            this.changeDishQuantity(this.dishes_in_cart, received_dish.id, dish_qte)
            this.presentToast("Quantité modifiée", 3000, 'bottom')
          } else {    
            received_dish.qte = dish_qte
            this.dishes_in_cart.push(received_dish) 
            this.emitDishesInCart()
            this.emitCartLength()
            this.emitBillTotal()
          }
        }
      }
    )
  }

  dishAlreadyInCart(contentArray:CartContent[], contentToFind:CartContent): boolean {
    var whitness:boolean = true
    for (let index = 0; index < contentArray.length; index++) {
      if ( JSON.stringify(contentArray[index].id) == JSON.stringify(contentToFind.id)   )
      {
        return true
        break
      } else whitness = false
    }
    if(whitness == false)
    return false
  }

  changeDishQuantity(cart_dishes_list:CartContent[], dish_to_modify_id:number, new_quantity:number) {
    cart_dishes_list.forEach(dish => {
      if (dish.id == dish_to_modify_id) {
        dish.qte = new_quantity
      }
    });
  }

  dishQuantityChanged(contentArray:CartContent[], contentToFind:CartContent): boolean {
    var whitness:boolean = true
    for (let index = 0; index < contentArray.length; index++) {
      if ( JSON.stringify(contentArray[index].id) == JSON.stringify(contentToFind.id)   )
      {
        if ( JSON.stringify(contentArray[index].qte) != JSON.stringify(contentToFind.qte)   )
        {
          return true
          break
        }
      } else whitness = false
    }
    if(whitness == false)
    return false
  }

  getDishesInCart() {
    return this.dishes_in_cart
  }

  promoExists(code_promo:string) {
    return this.http.get(this.config.getApiHostAddress()+"/code_promo_exists/"+ code_promo)
  }

  async presentToast(message:string, duration:number, pos:any, color:string='secondary') {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: pos,
      color: color
    });
    toast.present();
  }

  getPromobyCode(code_promo:string) {
    return this.http.get(this.config.getApiHostAddress()+"/code_promo/"+code_promo)
  }

  calculateCartBill() {
    this.bill_total = 0;
    this.dishes_in_cart.forEach(dish => {
      this.bill_total += dish.prix*dish.qte
    });
    return this.bill_total
  }

}
