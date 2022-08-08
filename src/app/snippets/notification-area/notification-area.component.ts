import { Component, OnInit, HostBinding } from '@angular/core';
import { Notification, NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notification-area',
  templateUrl: './notification-area.component.html',
  styleUrls: ['./notification-area.component.scss']
})

export class NotificationAreaComponent implements OnInit {
  notifications: Notification[] = Array()

  @HostBinding('class') get class() {
    return this.hasOpenNotifications()? 'active':''
  }

  constructor(private _notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.notifications = this._notificationService.getNotifications()
  }

  hasOpenNotifications() {
    return this.notifications.length > 0
  }
}