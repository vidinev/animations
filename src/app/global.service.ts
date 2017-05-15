import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  titleState;
  subTitleState;
  authButtonsState;
  loginOpen = 'out';
  registrationOpen = 'out';
  authOpen = 'out';
  constructor() { }
}
