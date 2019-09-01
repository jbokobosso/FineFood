import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  codePromo = false;

  dishes: object[] = [
    {name: 'Riz Gras', price: 700},
    {name: 'Spaghétthi blanc', price: 500}
  ];

  constructor() {}

  onDeletePanierElement(i) {
    this.dishes.splice(this.dishes.indexOf(i), 1);
    console.log(this.dishes);
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
