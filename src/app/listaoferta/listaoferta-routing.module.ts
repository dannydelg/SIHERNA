import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaofertaPage } from './listaoferta.page';

const routes: Routes = [
  {
    path: '',
    component: ListaofertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaofertaPageRoutingModule {}
