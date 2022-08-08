import { Component, OnInit, HostBinding } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

  }

  createNotification(title: string, text: string) {
    let noti: Notification = new Notification(title, text)
    this.notifications.push(noti)
  }

  closeNotification(notificationId: number) {
    let indexOfNoti = this.notifications
      .findIndex((noti: Notification) => noti.id == notificationId)
    let noti: Notification = this.notifications[indexOfNoti]
    noti.dimissed = true
    this.notifications.splice(indexOfNoti,1) //removing noti
  }

  hasOpenNotifications() {
    return this.notifications.length > 0
  }
}

class Notification {
  private static counter: number = 0
  private _title: string
  private _text: string
  private _id: number
  private _dimissed: boolean

  constructor(title: string, text: string) {
    this._title = title
    this._text = text
    this._id = Notification.counter++
    this._dimissed = false
  }

  get title() {
    return this._title
  }

  get text() {
    return this._text
  }

  get id() {
    return this._id
  }

  get dimissed() {
    return this._dimissed
  }

  set dimissed(bol: boolean) {
    if(bol != true)
      console.warn('A notification that was dimissed has been set to not dimissed')
    this._dimissed = bol
  }
}
