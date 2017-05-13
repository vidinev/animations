import { Injectable } from '@angular/core';
import {
  AnimationStateMetadata,
  AnimationTransitionMetadata,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  animate,
  trigger
} from '@angular/animations';
import { candiesConstants } from './candies.constant';

@Injectable()
export class CandiesService {

  static firstStateName = candiesConstants.firstStateName;
  static lastStateName = candiesConstants.lastStateName;
  static duration = candiesConstants.duration;
  static count = candiesConstants.count;

  static generateStates(): AnimationStateMetadata[] {
    let percentage = 100 / CandiesService.count;
    let states = [];
    for (let i = 0; i < CandiesService.count; i++) {
      let position = Math.round(i * percentage);
      let randomX = Math.round(Math.random() * 300) - 150;
      let currentState = state(`position${position}`, style({transform: `translate(${randomX}px, ${position}vh)`}));
      // Last step
      if (i === CandiesService.count - 1) {
        currentState = state(CandiesService.lastStateName , style({transform: `translate(${randomX}px, 100vh)`}));
      }
      // First step
      if (i === 0) {
        currentState = state(CandiesService.firstStateName , style({transform: `translate(${randomX}px, -150%)`}));
      }
      states.push(currentState);
    }
    return states;
  }

  static generateTransitions(stateNames: string[]): AnimationTransitionMetadata[] {
    let transitions = [];
    let names = [...stateNames];

    // Remove last element from names, because we shouldn't set lastName => lastName transition
    let lastStateName = names.pop();
    for (let i = 0; i < names.length; i++) {
      let currentDuration = Math.round(CandiesService.duration - CandiesService.duration / names.length * i);
      let currentTransition =  transition(`${names[i]} => ${lastStateName}`, [
        animate(`${currentDuration}ms cubic-bezier(0.5, 0, 0.75, 0.75)`)
      ]);
      transitions.push(currentTransition);
    }
    return transitions;
  }

  static generateFallCandyTrigger(): AnimationTriggerMetadata {
    let states = CandiesService.generateStates();
    let stateNames = states.map((state) => state.name);
    let transitions = CandiesService.generateTransitions(stateNames);
    return trigger('fallCandy', [
      ...states,
      ...transitions
    ]);
  }

  static getNames(trigger: AnimationTriggerMetadata): string[] {
    return trigger.definitions
      .map((definition: AnimationStateMetadata) => {
        if (definition.name) {
          return definition.name;
        }
      }).filter((name: string) => name);
  }

}
