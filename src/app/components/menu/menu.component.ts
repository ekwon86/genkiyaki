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
    ],
    plates: [
      { entree: 'Chicken', salad: 'L 7.99', veggies: 'R 6.99 / L 7.99', description: '', recommended: false},
      { entree: 'Beef', salad: 'L 8.99', veggies: 'R 7.99 / L 8.99', description: '', recommended: false},
      { entree: 'Combo (Chicken and Beef)', salad: 'L 8.99', veggies: 'R 7.99 / L 8.99', description: '', recommended: false},
      { entree: 'BBQ Ribs', salad: 'R 10.99', veggies: 'R 10.99', description: '', recommended: false },
      { entree: 'Ninja', salad: 'L 13.99', veggies: 'N/A', description: 'Beef, Chicken, Rib with Ninja Sauce', recommended: true }
    ],
    furious: [
      { entree: 'Furious Chicken', regPrice: '6.99', lgPrice: '7.99', isSpicy: true },
      { entree: 'Furious Pork', regPrice: '', lgPrice: '7.99', isSpicy: true },
      { entree: 'Furious Ninja Dog', regPrice: '5.99', lgPrice: '', isSpicy: true },
    ]
  };

  bowlsOpen = true;
  platesOpen = false;
  furiousOpen = false;
  ninjaOpen = false;

  constructor() { }

  ngOnInit() {
  }

  bowlHeadingClicked() {
    this.bowlsOpen = !this.bowlsOpen;
    $('#BowlsBody').slideToggle('fast');
  }

  platesHeadingClicked() {
    this.platesOpen = !this.platesOpen;
    $('#PlatesBody').slideToggle('fast');
  }

  furiousHeadingClicked() {
    this.furiousOpen = !this.furiousOpen;
    $('#FuriousBody').slideToggle('fast');
  }
}
