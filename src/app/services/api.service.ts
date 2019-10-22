import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private config:ConfigService) { }

  getDishes() {
    return this.http.get(this.config.getApiHostAddress()+"/plat");
  }

  getMenu() {
    return this.http.get(this.config.getApiHostAddress()+"/plats-au-menu");
  }
}
