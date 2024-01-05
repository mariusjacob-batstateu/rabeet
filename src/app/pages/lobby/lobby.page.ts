import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  interests: string[]=[]
  interestInput: string=""
  constructor() { }

  ngOnInit() {
  }

  addInterest(){
    this.interests.push(this.interestInput)
    this.interestInput=""
  }

  delInterest(interestIdx:number){
    this.interests.splice(interestIdx, 1);
  }
}
