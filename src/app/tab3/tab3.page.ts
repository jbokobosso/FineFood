import { Component, OnInit, OnDestroy } from '@angular/core';
import { FabService } from '../services/fab.service';
import { ApiService, CartContent } from '../services/api.service';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  private cart_bill:number = 0;
  private toggled = false;
  private default = 'add';
  private dishes_in_cart_indexes:CartContent[] = [];
  private dishes:any[] = [];
  private dishes_image_address;
  private codePromo = false;
  private code_promo:FormControl;


  constructor(
    private fab_service: FabService, 
    private api:ApiService, 
    private config:ConfigService,
    private router: Router) {}

  ngOnInit() {
    this.initForm()
    this.dishes_in_cart_indexes = this.api.getDishesInCart()
    this.dishes_image_address = this.config.getDishesImageAddress()    
    this.dishes = this.api.getDishesInCart()
  }

  initForm() {
    this.code_promo = new FormControl('')
  }

  onFab() {
    this.fab_service.onFabClicked();
    this.default = this.fab_service.getDefault();
    this.toggled = this.fab_service.getToggled();
  }

  onDeletePanierElement(i) {
    this.dishes.splice(this.dishes.indexOf(i), 1);
    this.api.emitCartLength();
  }

  onShowCodePromo() {
    this.codePromo = !this.codePromo;
  }

  dishesIsEmpty() {
    if (this.dishes.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // onConfirmerCommande() {
  //   this.api.promoExists(this.code_promo.value).subscribe(
  //     (server_response) => {
  //       if (server_response == true) {
  //         this.router.navigate(["/bill"])
  //         this.cart_bill = this.api.calculateCartBill()
  //       } else {
  //         this.api.presentToast("Code promo invalide", 2000, 'bottom')
  //       }
  //     }
  //   )
  // }

  onConfirmerCommande() {
    this.cart_bill = this.api.calculateCartBill()
    console.log(this.cart_bill)
    this.router.navigate(["/bill/"+this.cart_bill,])
  }

  makeBill() {

  }

  // makeDiscount(code_promo:string) {
  //   this.api.getPromobyCode(code_promo).subscribe(
  //     (promo) => console.log(promo)
  //   )
  // }

}
