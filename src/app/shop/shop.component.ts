import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../routing-animation.constant';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [
    slideToLeft()
  ],
  host: {
    '[@slideToLeft]': '',
  }
})
export class ShopComponent implements OnInit {
  items = [];

  constructor() {
    for (let i = 10; i > 0; i--) {
      this.items.push({
        image: `assets/img/cat${i}.jpg`,
        name: `Котяра #${i}`,
        price: 'Одесса'
      });
    }
  }

  ngOnInit() {
  }

}
