import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  globalWall: any[]=[
    // user, usersInvolved, date, desc
  ]

  constructor() {
    this.globalWall.push(["user111", null, "messfdfdfdfage1 lorem10fdfdfdfdfdfd dffdfd dfdfd"])
   }

  ngOnInit() {
  }

}
