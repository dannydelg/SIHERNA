import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertamodificarPage } from './ofertamodificar.page';

const routes: Routes = [
  {
    path: '',
    component: OfertamodificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertamodificarPageRoutingModule {}
