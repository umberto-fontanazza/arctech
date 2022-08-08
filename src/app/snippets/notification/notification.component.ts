import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Notification, NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() title: string = 'Notification title'
  @Input() text: string = 'This is the text of the notification'
  @Input() id: number = -1
  @Output() close = new EventEmitter<number>()

  constructor(private _notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  closeNotification() {
    this._notificationService.deleteNotification(this.id)
  }
}
