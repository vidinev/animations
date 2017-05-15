import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { slideToRight } from '../routing-animation.constant';
import { GlobalService } from '../global.service';

const animationStartDelay = 600;
const animation = '280ms cubic-bezier(0.6,-0.1, 0.85, 1.3)';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideToRight(),
    trigger('flyIn', [
      state('in', style({transform: 'scale(1) translateY(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'scale(0) translateY(50%)', opacity: 0}),
        animate(animation)
      ])
    ]),
    trigger('flyInLeft', [
      state('out', style({transform: 'translateX(-100%)', opacity: 0, display: 'none'})),
      state('in', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(animation)
      ]),
      transition('out => in', [
        animate(animation)
      ]),
      transition('in => out', [
        animate(120)
      ])
    ]),
    trigger('flyFromTop', [
      state('hidden', style({transform: 'translateY(-100%)', opacity: 0})),
      state('in', style({transform: 'translateX(0)', opacity: 1})),
      transition('hidden => in', [
        animate(animation)
      ])
    ])
  ],
  host: {
    '[@slideToRight]': '',
  }
})
export class HomeComponent implements OnInit {

  constructor(public global: GlobalService) {
  }

  ngOnInit() {
    setTimeout(() => this.global.titleState = 'in', animationStartDelay);
    this.global.authButtonsState = 'hidden';
  }

  showElement(name) {
    this.global[name] = 'in';
  }

  openLogin() {
    this.global.authOpen = 'in';
    this.global.loginOpen = 'in';
    this.global.registrationOpen = 'out';
  }

  openRegistration() {
    this.global.authOpen = 'in';
    this.global.registrationOpen = 'in';
    this.global.loginOpen = 'out';
  }

  closeAuth() {
    this.global.authOpen = 'out';
  }
}
