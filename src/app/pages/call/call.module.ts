import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallPageRoutingModule } from './call-routing.module';

import { CallPage } from './call.page';
import { ChatComponent } from 'src/app/components/chat/chat.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallPageRoutingModule
  ],
  declarations: [CallPage, ChatComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CallPageModule {}
