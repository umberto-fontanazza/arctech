import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  @Input() mobileMenuOpen: boolean = false
  @Output() menuToggle = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit(): void {
    let clickable = document.querySelector('#hamburger-menu') as HTMLElement
    clickable.addEventListener('click', (e: Event) => {
      this.menuToggle.emit()
    })

    let routerObservable = this.router.events as Observable<RouterEvent>
    routerObservable.pipe(
      filter((evt: RouterEvent) => evt instanceof NavigationEnd)
    ).subscribe((evt: RouterEvent) => {
      if(this.mobileMenuOpen)
        this.menuToggle.emit()
    })
  }

}
