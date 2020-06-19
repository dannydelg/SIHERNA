import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatoModalPageRoutingModule } from './candidato-modal-routing.module';

import { CandidatoModalPage } from './candidato-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatoModalPageRoutingModule
  ],
  declarations: [CandidatoModalPage]
})
export class CandidatoModalPageModule {}
