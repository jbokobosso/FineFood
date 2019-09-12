import { Component } from '@angular/core';
import { FabService } from '../services/fab.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private toggled = false;
  private default = 'add';

  codePromo = false;

  dishes: object[] = [
    {name: 'Riz Gras', price: 700},
    {name: 'Spaghétthi blanc', price: 500}
  ];

  constructor(private fab_service: FabService) {}

  onFab() {
    this.fab_service.onFabClicked();
    this.default = this.fab_service.getDefault();
    this.toggled = this.fab_service.getToggled();
  }

  onDeletePanierElement(i) {
    this.dishes.splice(this.dishes.indexOf(i), 1);
    // console.log(this.dishes);
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
