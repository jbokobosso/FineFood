import { Component, OnInit } from '@angular/core';
import { FabService } from '../services/fab.service';
import { ApiService } from '../services/api.service';
import { Subscription, Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  toggled = false;
  default = 'add';
  dishes_s:Subscription;
  menu:Observable<any>;
  dishes_image_address;
  commander:boolean = false;
  qte:FormControl;


  constructor(private fab_service: FabService, private api:ApiService, private config:ConfigService) {}

  
  ngOnInit() {
    this.initForm()
    this.getDishesList();
    this.dishes_image_address = this.config.getDishesImageAddress();
  }

  initForm() {
    this.qte = new FormControl('', Validators.required)
  }

  onFab() {
    this.fab_service.onFabClicked();
    this.default = this.fab_service.getDefault();
    this.toggled = this.fab_service.getToggled();
  }

  getDishesList() {
    this.menu = this.api.getDishes();
  }  
  
  addToCart(dish_id:number) {
    this.api.addDishToCart(dish_id, this.qte.value)
    // Change this message into a toast notification saying: "Dish added to cart !!!"
    this.commander = !this.commander
  }
  
  onCommander() {
    this.commander = !this.commander
  }

}
