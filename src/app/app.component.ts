import { Component } from '@angular/core';
import { Router } from '@angular/router';


/**
 * https://www.pinterest.com/pin/252905335303842256/
 */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get visible() {
    return this.route.isActive('/friends', true);
  };
  constructor(private route: Router) {}
}
