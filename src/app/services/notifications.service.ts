import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications: Notification[] = Array()

  constructor() { }

  getNotifications() {
    return this.notifications
  }

  sendNotification(noti: Notification) {
    this.notifications.push(noti)
  }

  deleteNotification(notificationId: number) {
    this.notifications = this.notifications.splice(notificationId,1)
  }
}

export class Notification {
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
