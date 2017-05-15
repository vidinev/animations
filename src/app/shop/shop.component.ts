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
    for (let i = 1; i < 15; i++) {
      this.items.push({
        image: `assets/img/candy${i}.png`,
        name: `Изделие #${i}`,
        price: Math.round(Math.random() * 99) * 10
      });
    }
  }

  ngOnInit() {
  }

}
