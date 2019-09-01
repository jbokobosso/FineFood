import { Component } from '@angular/core';
import { FabService } from '../services/fab.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private toggled = false;
  private default = 'add';

  dishes: object[] = [
    {name: 'Riz au gras', price: 700},
    {name: 'Pizza mozarella', price: 500},
    {name: 'Pizza africain', price: 500},
    {name: 'Frites au poulet', price: 500},
    {name: 'Riz contonnais', price: 500},
  ];

  constructor(private fab_service: FabService) {}

  onFab() {
    this.fab_service.onFabClicked();
    this.default = this.fab_service.getDefault();
    this.toggled = this.fab_service.getToggled();
  }

}
