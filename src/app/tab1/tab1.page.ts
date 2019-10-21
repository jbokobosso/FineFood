import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FabService } from '../services/fab.service';
import { ApiService } from '../services/api.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  private toggled = false;
  private default = 'add';

  private dishes:Observable<any>;

  constructor(private menu: MenuController, private fab_service: FabService, private api:ApiService) {}

  ngOnInit() {
    this.getDishesList()
  }

  onFab() {
    this.fab_service.onFabClicked();
    this.default = this.fab_service.getDefault();
    this.toggled = this.fab_service.getToggled();
  }

  getDishesList() {
    this.dishes = this.api.getMenu();
  }

}
