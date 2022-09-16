import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './app/home/main/main.component';
import { MediaLoungeComponent } from './app/media/media-lounge/media-lounge.component';
import { AboutUsComponent } from './app/about/about-us/about-us.component';
import { ContactUsComponent } from './app/contact/contact-us/contact-us.component';
import { MenuItemsComponent } from './app/home/nav/menu-items.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MediaLoungeComponent,
    AboutUsComponent,
    ContactUsComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
