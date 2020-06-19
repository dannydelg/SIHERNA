import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuempresaPage } from './menuempresa.page';

const routes: Routes = [
  {
    path: '',
    component: MenuempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuempresaPageRoutingModule {}
