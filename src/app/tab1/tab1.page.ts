import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FabService } from '../services/fab.service';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  toggled = false;
  default = 'add';
  dishes_image_address;
  panier:number[] = [];
  commander:boolean = false;
  qte:FormControl;

  dishes:Observable<any>;

  constructor(
    private router:Router,
    private menu: MenuController, 
    private fab_service: FabService, 
    private api:ApiService, 
    private config:ConfigService
    ) {}

  ngOnInit() {
    this.dishes_image_address = this.config.getDishesImageAddress();
    this.getDishesList();
    this.initForm();
  }

  initForm() {
    this.qte = new FormControl('', [Validators.required, Validators.min(1)])
  }

  onFab() {
    this.fab_service.onFabClicked();
    this.default = this.fab_service.getDefault();
    this.toggled = this.fab_service.getToggled();
  }

  getDishesList() {
    this.dishes = this.api.getMenu();
  }

  addToCart(dish_id:number) {
    this.api.addDishToCart(dish_id, this.qte.value)
    this.commander = !this.commander
    this.qte.reset()
  }
  
  onCommander() {
    this.commander = !this.commander
  }

  onRefresh() {
    this.ngOnInit()
  }

}
