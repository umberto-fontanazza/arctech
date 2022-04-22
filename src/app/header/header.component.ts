import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen: boolean = false
  @Output() mobileMenu = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenuToggle(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen
    this.mobileMenu.emit()
  }

}
