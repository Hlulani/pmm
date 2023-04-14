import { ContactUsComponent } from './app/contact/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './app/home/main/main.component';
import { AboutUsComponent } from './app/about/about-us/about-us.component';
import { MediaLoungeComponent } from './app/media/media-lounge/media-lounge.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'media', component: MediaLoungeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
