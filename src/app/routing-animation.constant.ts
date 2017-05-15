import {trigger, animate, transition, style} from '@angular/animations';

export function slideToRight() {
  return trigger('slideToRight', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.4s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.4s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

export function slideToLeft() {
  return trigger('slideToLeft', [
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}
