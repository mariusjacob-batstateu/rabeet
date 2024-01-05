import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import Swiper from 'swiper';


@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss']
})
export class CallPage implements OnInit {

  // anonym list
  anonymCall: any[]=[
    // kahit hanggang lima muna
    // anonym name
  ]

  chatThread: any[]=[
    // sender, date, message
  ]
  userChat: string=""

  // ACTION btn
  voiceFx: boolean=false
  mic: boolean=false
  chat: boolean=false
  record: boolean=false
  music: boolean=false
  wallet: boolean=false

  actionToggleAnimBool: boolean=false


  // UTILITIES
  volume: number=20;


  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper


  constructor() {
    this.anonymCall.push(["user111"])
    this.anonymCall.push(["user222"])
    this.anonymCall.push(["user333"])

    this.chatThread.push([0, "Jul", "messfdfdfdfage1 lorem10fdfdfdfdfdfd dffdfd dfdfd"])
    this.chatThread.push([0, "Aug", "message2"])
    this.chatThread.push([1, "Sep", "message3"])
    this.chatThread.push([0, "Jul", "messfdfdfdfage1 lorem10fdfdfdfdfdfd dffdfd dfdfd"])
    this.chatThread.push([0, "Aug", "message2"])
    this.chatThread.push([1, "Sep", "message3"])
    this.chatThread.push([0, "Jul", "messfdfdfdfage1 lorem10fdfdfdfdfdfd dffdfd dfdfd"])
    this.chatThread.push([0, "Aug", "message2"])
    this.chatThread.push([1, "Sep", "message3"])
   }

  ngOnInit() {
  }



  // Utilities
  pinFormatter(value: number) {
    return `${value}%`;
  }

  callAction(action:string){
    switch (action) {
      case "voiceFx":
        this.voiceFx=!this.voiceFx
        break;
      case "mic":
        this.mic=!this.mic
        break;
      case "chat":
        this.chat=!this.chat
        this.actionToggleAnimBool=!this.actionToggleAnimBool
        // this.hatdog="4"
        this.actionToggleAnim()
        break;
      case "record":
        this.record=!this.record
        break;
      case "music":
        this.music=!this.music
        break;
      case "wallet":
        this.wallet=!this.wallet
        break;
      default:
        break;
    }
  }

  endCall(){
    this.voiceFx=false
    this.mic=false
    this.chat=false
    this.record=false
    this.music=false
    this.wallet=false

    this.actionToggleAnimBool=false
    this.actionToggleAnim()
  }

  actionToggleAnim(){

    // for action section toggle
    if(this.actionToggleAnimBool){
      anime({
          targets: '.col-action, .col-action ion-button', 
          // height: 'clamp(20px, 30vw, 50px)',
          // width: 'clamp(20px, 30vw, 50px)',
          scale:0.7,
          duration: 2000
        }
      );

      // chat popup animation
      anime({
          targets: '.section-chatbox', // Replace with your element's class or ID
          paddingTop:0,
          duration: 2000
        }
      );
    }
    else{
      anime({
          targets: '.col-action, .col-action ion-button', // Replace with your element's class or ID
          // height: 'clamp(30px, 20vw, 100px)',
          // width: 'clamp(30px, 20vw, 100px)',
          scale: 1,
          duration: 2000
        }
      );

    // chat popup animation
    anime({
          targets: '.section-chatbox', // Replace with your element's class or ID
          paddingTop:'500px',
          duration: 2000
        }
      );
    }

    

    

  }

  colFormat(type: number){
    var dynamic=0

    if(this.actionToggleAnimBool){
      switch (type) {
        case 0:
          dynamic=1.714285714285714
          break;
        case 1:
          dynamic=1.714285714285714
          break;
        case 2:
          dynamic=1.714285714285714
          break;
        default:
          break;
      }
    }
    else{
      switch (type) {
        case 0:
          dynamic=4
          break;
        case 1:
          dynamic=4
          break;
        case 2:
          dynamic=12
          break;
        default:
          break;
      }
    }
    
    return dynamic
  }

  // countdown(seconds: number) {
  //   let count = seconds;
  //   const timer = setInterval(() => {
  //     console.log(count);
  //     count--;
  
  //     if (count < 0) {
  //       clearInterval(timer);
  //     }
  //   }, 1000); // 1000ms = 1 second
  // }


  sendChat(){
    this.chatThread.push([0, "Sep", this.userChat])
  }


  swiperReady(){
    this.swiper=this.swiperRef?.nativeElement.swiper
    this.swiper?.disable
  }

  goNext(){
    this.swiper?.slideNext()
  }
  

}
