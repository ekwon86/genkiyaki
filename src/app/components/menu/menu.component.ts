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
    ],
    ninja: [
      { entree: 'Ninja Fries', price: '5.99', recommended: true },
      { entree: 'Ninja Nachos', price: '5.99', recommended: true },
      { entree: 'Ninja Cali Burrito', price: '7.99', recommended: false },
      { entree: 'Ninja "Chicken" Slam! (Quesadilla)', price: '5.99', recommended: false },
      { entree: 'Ninja Taco (Mild)', price: '1.25', recommended: true }
    ],
    tacos: [
      { entree: 'Ninja Taco (Mild)', price: '1.25', recommended: true, description: '', isSpicy: false, isDeath: false },
      { entree: 'Epic Taco (Medium)', price: '1.50', recommended: false, description: '', isSpicy: true, isDeath: false},
      { entree: 'Death Taco (Extreme)', price: '3.00', recommended: false, description: 'Dine-In Only / Limited Quantity', isSpicy: false, isDeath: true },
      { entree: 'Shrimp Taco', price: '2.25', recommended: false , description: '', isSpicy: false, isDeath: false },
      { entree: 'Beef Ribeye Taco', price: '2.00', recommended: false, description: '', isSpicy: false, isDeath: false }
    ],
    soupAndSalad: [
      { entree: 'Udon Soup (Soup Only)', price: '1.99', description: '' },
      { entree: 'Udon Noodles (Soup and Noodles)', price: '5.99', description: '' },
      { entree: 'Garden Salad (Small Only)', price: '2.00', description: '' },
      { entree: 'Chicken Salad', price: '6.99', description: 'Includes soy sauce vinaigrette dressing' }
    ],
    extra: [
      { name: 'Chicken', price: '2.99' },
      { name: 'Beef', price: '3.99' },
      { name: 'BBQ Ribs', price: '3.99' },
      { name: 'Rice', price: '1.59' },
      { name: 'Veggies', price: '2.00' }
    ],
    sides: [
      { name: 'Gyoza (6 Pieces)', price: '3.99', description: '' },
      { name: 'Shrimp Tempura (5 Pieces)', price: '6.99', description: '' },
      { name: 'Kimchee', price: '2.00', description: '' },
      { name: 'Yakitori Chicken', price: '1.00', description: 'Sold Individually '}
    ],
    drinks: [
      { name: 'Regular', price: '1.59' },
      { name: 'Large', price: '1.99' },
      { name: 'Coconut', price: '2.00' },
      { name: 'Snapple', price: '2.00' },
      { name: 'Water', price: '1.00' }
    ]
  };

  bowlsOpen = true;
  platesOpen = false;
  furiousOpen = false;
  ninjaOpen = false;
  tacosOpen = false;
  soupAndSaladOpen = false;
  extraOpen = false;
  sidesOpen = false;
  drinksOpen= false;

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

  ninjaHeadingClicked() {
    this.ninjaOpen = !this.ninjaOpen;
    $('#NinjaBody').slideToggle('fast');
  }

  tacosHeadingClicked() {
    this.tacosOpen = !this.tacosOpen;
    $('#TacosBody').slideToggle('fast');
  }

  soupAndSaladHeadingClicked() {
    this.soupAndSaladOpen = !this.soupAndSaladOpen;
    $('#SoupSaladBody').slideToggle('fast');
  }

  extraHeadingClicked() {
    this.extraOpen = !this.extraOpen;
    $('#ExtraBody').slideToggle('fast');
  }

  sidesHeadingClicked() {
    this.sidesOpen = !this.sidesOpen;
    $('#SidesBody').slideToggle('fast');
  }

  drinksHeadingClicked() {
    this.drinksOpen = !this.drinksOpen;
    $('#DrinksBody').slideToggle('fast');
  }
}
