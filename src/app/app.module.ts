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
import { HamburgerMenuComponent } from './snippets/hamburger-menu/hamburger-menu.component';
import { MobileMenuComponent } from './snippets/mobile-menu/mobile-menu.component';
import { NotificationAreaComponent } from './snippets/notification-area/notification-area.component';
import { NotificationComponent } from './snippets/notification/notification.component';
import { NotificationsService } from './services/notifications.service';

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
    WhatsappComponent,
    HamburgerMenuComponent,
    MobileMenuComponent,
    NotificationAreaComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
