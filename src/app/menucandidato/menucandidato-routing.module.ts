import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucandidatoPage } from './menucandidato.page';

const routes: Routes = [
  {
    path: '',
    component: MenucandidatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucandidatoPageRoutingModule {}
