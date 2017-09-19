import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  smoothScroll(event) {
    const section = '#' + event.target.innerHTML;
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 'fast');
  }

}
