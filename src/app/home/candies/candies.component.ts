import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CandiesService } from './candies.service';
import { candiesConstants } from './candies.constant';

const { count, lastStateName, firstStateName } = candiesConstants;
const fallCandyTrigger = CandiesService.generateFallCandyTrigger();
const stateNames = CandiesService.getNames(fallCandyTrigger);

@Component({
  selector: 'app-candies',
  templateUrl: './candies.component.html',
  styleUrls: ['./candies.component.scss'],
  animations: [
    fallCandyTrigger,
    trigger('rotateCandy', [
      state(firstStateName , style({transform: 'rotate(0deg)'})),
      state(lastStateName , style({transform: 'rotate(360deg)'})),
      transition(`${firstStateName} => ${lastStateName}`, [
        animate('12s linear')
      ])
    ])
  ]
})
export class CandiesComponent implements OnInit {
  bigCandies = [];

  constructor() {
  }

  ngOnInit() {
    this.generateCandies();
    this.bigCandies.forEach((candy) => {
      this.startAnimation(candy);
    });
  }

  generateCandies() {
    let randomStateNames = [];
    for (let i = 0; i < count; i++) {
      randomStateNames.push(stateNames[Math.round(Math.random() * stateNames.length - 1)]);
    }
      this.bigCandies = randomStateNames.map((state: string) => {
        let randomSize = Math.random() * 0.5;
        let size = `${100 + randomSize * 100}%`;
        return {
          state, rotateState: firstStateName,
          style: {
            width: size,
            height: size
          }
        };
      });
  }

  startAnimation(candy) {
    setTimeout(() => {
      candy.state = lastStateName;
      candy.rotateState = lastStateName;
    });
  }

  reInit(candy, stateType) {
    if (candy[stateType] === lastStateName) {
      setTimeout(() => candy[stateType] = firstStateName);
    }
    if (candy[stateType] === firstStateName) {
      setTimeout(() => candy[stateType] = lastStateName);
    }
  }

}
