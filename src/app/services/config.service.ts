import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  api_host_address = "http://192.168.0.101:8000";
  dishes_image_address = "http://192.168.0.101:8000/image";

  getApiHostAddress() {
    return this.api_host_address;
  }

  getDishesImageAddress() {
    return this.dishes_image_address;
  }
}
