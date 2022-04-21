import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {
  @Input() phone: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
