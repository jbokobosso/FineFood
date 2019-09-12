import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  history = false;

  constructor() { }

  ngOnInit() {
  }

  onViewHistory() {
    this.history = !this.history;
  }

}
