import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  private api_host_address = "http://localhost:8000";

  getApiHostAddress() {
    return this.api_host_address;
  }
}
