import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  private cart_length: number = 0;

  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.cart_length_subject.subscribe(
      (received_cart_length) => {
        this.cart_length = received_cart_length
      }
    )
  }

}
