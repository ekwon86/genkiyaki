import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('bannerAnimation', [
      state('invisible', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(50px)'
      })),
      transition('invisible => visible', animate('100ms ease'))
    ]),
    trigger('subbannerAnimation', [
      state('invisible', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(-50px)'
      })),
      transition('invisible => visible', animate('100ms ease'))
    ]),
  ]
})
export class LandingComponent implements OnInit {

  state = 'invisible';

  constructor() { }

  ngOnInit() {
    this.showBanner();
  }

  showBanner() {
    setTimeout(() => {
      this.state = 'visible';
    }, 1000);
  }

}
