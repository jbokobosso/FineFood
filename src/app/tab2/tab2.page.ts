import { Component, OnInit } from '@angular/core';
import { FabService } from '../services/fab.service';
import { ApiService } from '../services/api.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  private toggled = false;
  private default = 'add';
  private dishes_s:Subscription;
  private menu:Observable<any>;


  constructor(private fab_service: FabService, private api:ApiService) {}

  ngOnInit() {
    this.getDishesList();
  }

  onFab() {
    this.fab_service.onFabClicked();
    this.default = this.fab_service.getDefault();
    this.toggled = this.fab_service.getToggled();
  }

  getDishesList() {
    this.menu = this.api.getDishes();
  }

}
