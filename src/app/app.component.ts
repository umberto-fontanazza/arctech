import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arctech';
  mobileMenuOpen: boolean = false

  mobileMenuToggle(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen
  }
}
