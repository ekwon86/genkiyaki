import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { GalleryComponent } from './components/home/gallery/gallery.component';
import { ContactComponent } from './components/home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
