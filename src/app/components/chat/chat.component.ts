import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {

  chatThread: any[]=[
    // sender, date, message
  ]
  
  constructor() { 
    this.chatThread.push([0, "Jul", "messfdfdfdfage1 lorem10fdfdfdfdfdfd dffdfd dfdfd"])
    this.chatThread.push([0, "Aug", "message2"])
    this.chatThread.push([1, "Sep", "message3"])

    console.log(this.chatThread)
  }

  ngOnInit() {}

}
