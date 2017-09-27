import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuHeadingClicked() {
    $('.menu-item-text-subcontainer').slideToggle('fast');
  }

}
