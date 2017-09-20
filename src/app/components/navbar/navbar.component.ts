import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  insideMenu = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  smoothScroll(event) {
    const section = '#' + event.target.innerHTML;
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 500);
  }

  menuClicked() {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top
    }, 'fast');
    this.insideMenu = true;
  }

  returnHome() {
    this.insideMenu = false;
  }
}
