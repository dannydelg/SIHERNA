import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertadetallePageRoutingModule } from './ofertadetalle-routing.module';

import { OfertadetallePage } from './ofertadetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertadetallePageRoutingModule
  ],
  declarations: [OfertadetallePage]
})
export class OfertadetallePageModule {}
