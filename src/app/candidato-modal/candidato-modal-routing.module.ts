import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatoModalPage } from './candidato-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatoModalPageRoutingModule {}
