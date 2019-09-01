import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dishes: object[] = [
    {name: 'Riz au gras', image: 'atieke.jpeg', price: 700, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?'},
    {name: 'Pizza mozarella', image: 'riz-gras.jpeg', price: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?'},
    {name: 'Pizza africain', image: 'atieke.jpeg', price: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?'},
    {name: 'Frites au poulet', image: 'riz-gras.jpeg', price: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?'},
    {name: 'Riz contonnais', image: 'atieke.jpeg', price: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum perspiciatis est numquam dolores, placeat esse qui, illo voluptatum quae dicta tempore natus quibusdam culpa neque ut ipsam similique et?'},
  ];

  constructor(private menu: MenuController) {}

}
