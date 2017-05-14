import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

const animationStartDelay = 500;
const animation = '280ms cubic-bezier(0.6,-0.1, 0.85, 1.3)';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
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
  ]
})
export class HomeComponent implements OnInit {
  titleState;
  subTitleState;
  authButtonsState;
  loginOpen = 'out';
  registrationOpen = 'out';
  authOpen = 'out';
  ngOnInit() {
    setTimeout(() => this.titleState = 'in', animationStartDelay);
    this.authButtonsState = 'hidden';
  }

  showElement(name) {
    this[name] = 'in';
  }

  openLogin() {
    this.authOpen = 'in';
    this.loginOpen = 'in';
    this.registrationOpen = 'out';
  }

  openRegistration() {
    this.authOpen = 'in';
    this.registrationOpen = 'in';
    this.loginOpen = 'out';
  }

  closeAuth() {
    this.authOpen = 'out';
  }
}
