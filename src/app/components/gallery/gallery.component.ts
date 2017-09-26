import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pictureArray = [
    {url: '../../../assets/genkifront.jpg'},
    {url: '../../../assets/taco.jpg'},
    {url: '../../../assets/genkiinside.jpg'},
    {url: '../../../assets/fries.jpg'},
    {url: '../../../assets/zombieboard.jpg'},
    {url: '../../../assets/chxplate.jpg'},
    {url: '../../../assets/taco3.jpg'},
    {url: '../../../assets/assortment2.jpg'}
  ];
  showPictureModal = false;
  currentIndex = 0;
  currentPicURL = '';
  plusClickCount = 0;

  constructor() { }

  ngOnInit() {
  }

  plusIconClicked() {
    this.plusClickCount++;
    if (this.plusClickCount === 1) {
      this.pictureArray.push(
        {url: '../../../assets/taco4.jpg'},
        {url: '../../../assets/food.jpg'},
        {url: '../../../assets/fries2.jpg'},
        {url: '../../../assets/zombiewall.jpg'},
        {url: '../../../assets/bbqplate2.jpg'},
        {url: '../../../assets/porkplate.jpg'},
        {url: '../../../assets/genkiman.jpg'},
        {url: '../../../assets/zombierules.jpg'});

    } else if (this.plusClickCount === 2) {
      this.pictureArray.push(
        {url: '../../../assets/bbqplate.jpg'},
        {url: '../../../assets/fries3.jpg'},
        {url: '../../../assets/taco2.jpg'},
        {url: '../../../assets/genkicombo.jpg'},
        {url: '../../../assets/taco5.jpg'},
        {url: '../../../assets/bbqplate3.jpg'},
        {url: '../../../assets/combo.jpg'},
        {url: '../../../assets/hotdog.jpg'}
      );
    }
  }

  pictureClicked(i) {
    this.showPictureModal = true;
    this.currentIndex = i;
    document.body.style.overflow = 'hidden';
    this.currentPicURL = this.pictureArray[i].url;
  }

  leftArrowClicked() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.pictureArray.length;
    }
    this.currentIndex--;
    this.currentPicURL = this.pictureArray[this.currentIndex].url;
  }

  rightArrowClicked() {
    if (this.currentIndex === this.pictureArray.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.currentPicURL = this.pictureArray[this.currentIndex].url;
  }

  closeModal() {
    this.showPictureModal = false;
    document.body.style.overflow = 'scroll';
  }

}
