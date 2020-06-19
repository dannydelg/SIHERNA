import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucandidatoPageRoutingModule } from './menucandidato-routing.module';

import { MenucandidatoPage } from './menucandidato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucandidatoPageRoutingModule
  ],
  declarations: [MenucandidatoPage]
})
export class MenucandidatoPageModule {}
