import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenuToggle(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen
  }

}
