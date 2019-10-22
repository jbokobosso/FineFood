import { Component, OnInit, OnDestroy } from '@angular/core';
import { FabService } from '../services/fab.service';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {
  
  private toggled = false;
  private default = 'add';
  private dishes_in_cart_indexes:number[] = [];
  private dishes:any[] = [];
  private dishes_image_address;

  codePromo = false;


  constructor(private fab_service: FabService, private api:ApiService, private config:ConfigService) {}

  ngOnInit() {
    this.dishes_in_cart_indexes = this.api.getDishesInCart()
    this.dishes_image_address = this.config.getDishesImageAddress();
    
    this.dishes = this.api.getDishesInCart()
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

}
