import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('overlayAction', [
      state('visible', style({opacity: 1, display: 'flex'})),
      state('hidden', style({opacity: 0, display: 'none'})),
      transition('visible <=> hidden', [
        animate('250ms ease')
      ])
    ]),
    trigger('modalAction', [
      state('out', style({transform: 'translateY(-600px)'})),
      state('in', style({transform: 'translateY(0)'})),
      state('shake', style({transform: 'rotate(0deg)'})),
      state('rotate', style({transform: 'rotateY(90deg)'})),
      transition('in <=> out', [
        animate('320ms ease')
      ]),
      transition('in <=> rotate', [
        animate('180ms ease-in')
      ]),
      transition('in <=> shake', [
        animate('500ms ease', keyframes([
          style({transform: 'rotate(-5deg)', offset: 0}),
          style({transform: 'rotate(5deg)',  offset: 0.2}),
          style({transform: 'rotate(0deg)',     offset: 0.4}),
          style({transform: 'rotate(-5deg)', offset: 0.6}),
          style({transform: 'rotate(5deg)',  offset: 0.8}),
          style({transform: 'rotate(0deg)',     offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  opacityState = 'hidden';
  modalState = 'out';
  name = '';
  invalid = false;
  isSuccess = false;
  constructor() { }

  ngOnInit() {
  }

  modalAnimationFinish(event) {
    let isModalHiddenNow = event && event.fromState === 'in' && event.toState === 'out';
    let isModalRotated = event && event.fromState === 'in' && event.toState === 'rotate';
    if (isModalHiddenNow) {
      this.opacityState = 'hidden';
      this.modalState = 'out';
      this.isSuccess = false;
    }
    if (isModalRotated) {
      this.isSuccess = true;
      this.modalState = 'in';
    }
  }

  overlayAnimationFinish(event) {
    let isOverlayVisibleNow = event && event.fromState === 'hidden' && event.toState === 'visible';
    if (isOverlayVisibleNow) {
      this.modalState = 'in';
    }
  }

  closeModal() {
    this.modalState = 'out';
    this.name = '';
    this.invalid = false;
  }

  showModal() {
    this.opacityState = 'visible';
  }

  cancel() {
    this.modalState = 'shake';
    this.invalid = true;
    setTimeout(() => this.modalState = 'in');
  }

  pay() {
    if (this.name) {
      this.modalState = 'rotate';
      return;
    }
    this.cancel();
  }

}
