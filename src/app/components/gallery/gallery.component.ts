import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pictureArray = [
    {url: '../../../assets/bbqplate.jpg'},
    {url: '../../../assets/bbqplate2.jpg'},
    {url: '../../../assets/chxbowl.jpg'},
    {url: '../../../assets/taco.jpg'},
    {url: '../../../assets/fries.jpg'},
    {url: '../../../assets/taco2.jpg'},
    {url: '../../../assets/chxplate.jpg'},
    {url: '../../../assets/taco3.jpg'},
    {url: '../../../assets/chxplate.jpg'},
    {url: '../../../assets/hotdog.jpg'}
  ];
  showPictureModal = false;
  currentPicURL = '';

  constructor() { }

  ngOnInit() {
  }

  pictureClicked(i) {
    this.showPictureModal = true;
    document.body.style.overflow = 'hidden';
    this.currentPicURL = this.pictureArray[i].url;
  }

  leftArrowClicked() {

  }

  rightArrowClicked() {

  }

  closeModal() {
    this.showPictureModal = false;
    document.body.style.overflow = 'scroll';
  }

}
