import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainSliderComponent } from './sections/main-slider/main-slider.component';
import { FeaturesComponent } from './sections/features/features.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { WhatsappComponent } from './snippets/whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainSliderComponent,
    FeaturesComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutUsComponent,
    UnderConstructionComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
