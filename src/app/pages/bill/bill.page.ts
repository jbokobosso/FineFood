import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {

  private cart_bill:number = 0;
  private deliver:boolean = true;

  deliveryForm: FormGroup = new FormGroup({
    street: new FormControl(''),
    deliveryPlace: new FormControl(''),
    paymentMethod: new FormControl(''),
    transactionNumber: new FormControl('')
  });

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.cart_bill = parseFloat(this.route.snapshot.paramMap.get("cart_bill"))
    console.log(this.cart_bill)
  }

  onSubmit() {
    console.log(this.deliveryForm.value);
  }

  onEatHere() {
    this.deliver = !this.deliver;
   if (this.deliveryForm.disabled) {
     this.deliveryForm.enable();
   } else if (!this.deliveryForm.disabled) {
     this.deliveryForm.disable();
   } else {
    //  Make a toast for refreshing this page cause of unattended error
    console.log('Something went wrong: The form is nor enabled nor disabled when user checks to eat on the place');
    console.log(this.deliveryForm.disabled);
   }
  }

}
