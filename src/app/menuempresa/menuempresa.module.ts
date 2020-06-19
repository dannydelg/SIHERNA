import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuempresaPageRoutingModule } from './menuempresa-routing.module';

import { MenuempresaPage } from './menuempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuempresaPageRoutingModule
  ],
  declarations: [MenuempresaPage]
})
export class MenuempresaPageModule {}
