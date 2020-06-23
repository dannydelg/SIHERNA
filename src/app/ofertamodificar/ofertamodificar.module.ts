import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertamodificarPageRoutingModule } from './ofertamodificar-routing.module';

import { OfertamodificarPage } from './ofertamodificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertamodificarPageRoutingModule
  ],
  declarations: [OfertamodificarPage]
})
export class OfertamodificarPageModule {}
