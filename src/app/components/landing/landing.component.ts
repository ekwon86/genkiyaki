import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { } from '@types/googlemaps';

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
    this.initMap();
    this.initMap2();
  }

  initMap() {
    setTimeout(function() {
      const latlng = new google.maps.LatLng(33.846746, -118.124051);
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: latlng
      });
      const marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }, 1000);
  }
  initMap2() {
    setTimeout(function() {
      const latlng = new google.maps.LatLng(33.975706, -117.342088);
      const map = new google.maps.Map(document.getElementById('map2'), {
        zoom: 14,
        center: latlng
      });
      const marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }, 1000);
  }

  showBanner() {
    setTimeout(() => {
      this.state = 'visible';
    }, 1000);
  }

}
