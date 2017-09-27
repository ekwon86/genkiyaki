import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = {
    bowls: [
      { entree: 'Chicken', regPrice: '4.99', lgPrice: '5.99', recommended: true },
      { entree: 'Beef', regPrice: '6.49', lgPrice: '7.49', recommended: false },
      { entree: 'Veggie', regPrice: '4.99', lgPrice: 'N/A', recommended: false },
      { entree: 'Combo (Chicken and Beef)', regPrice: '6.49', lgPrice: '7.49', recommended: true },
      { entree: 'D-Bowl', regPrice: 'N/A', lgPrice: '7.49', recommended: false },
      { entree: 'Shrimp', regPrice: '6.49', lgPrice: 'N/A', recommended: false },
    ]
  };

  bowlsOpen = true;

  constructor() { }

  ngOnInit() {
  }

  bowlHeadingClicked() {
    this.bowlsOpen = !this.bowlsOpen;
    $('#BowlsBody').slideToggle('fast');
  }

}
