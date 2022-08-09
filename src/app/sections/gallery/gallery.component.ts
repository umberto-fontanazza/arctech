import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Notification, NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  constructor(private _elementRef: ElementRef, private _notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let gallery: Element = this._elementRef.nativeElement
    let noti = new Notification('Tocca le immagini','Scopri altri dettagli sul nostro prodotto interagendo con le immagini.')
    let scrollCallback = () => {
      let top = gallery.getBoundingClientRect().top
      let bottom = gallery.getBoundingClientRect().bottom
      let height = gallery.getBoundingClientRect().height
      if(top - window.innerHeight > 0 || bottom < 0)
        return
      //this component is in view
      this._notificationService.sendNotification(noti)
      window.removeEventListener('scroll', scrollCallback)
    }
    window.addEventListener('scroll', scrollCallback)
  }
}
