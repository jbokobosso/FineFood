import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  private api_host_address = "http://localhost:8000";
  private dishes_image_address = "http://localhost:8000/image";

  getApiHostAddress() {
    return this.api_host_address;
  }

  getDishesImageAddress() {
    return this.dishes_image_address;
  }
}
