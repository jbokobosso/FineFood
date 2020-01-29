import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FabService {

  toggled = false;
  default = 'add';

  constructor() { }

  onFabClicked() {
    this.toggled = !this.toggled;
    if (this.default === 'add') {
      this.default = 'close';
    } else {
      this.default = 'add';
    }
  }

  public getToggled(): boolean {
    return this.toggled;
  }

  public getDefault() {
    return this.default;
  }
}
