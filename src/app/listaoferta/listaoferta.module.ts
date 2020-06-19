import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaofertaPageRoutingModule } from './listaoferta-routing.module';

import { ListaofertaPage } from './listaoferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaofertaPageRoutingModule
  ],
  declarations: [ListaofertaPage]
})
export class ListaofertaPageModule {}
