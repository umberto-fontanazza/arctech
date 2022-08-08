import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  closeNotification() {
    this.close.emit(this.id)
  }
}
