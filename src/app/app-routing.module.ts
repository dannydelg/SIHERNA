import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'addcustomer',
    loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  },
  {
    path: 'showcustomer/:id',
    loadChildren: () => import('./showcustomer/showcustomer.module').then( m => m.ShowcustomerPageModule)
  },
  {
    path: 'candidato-modal',
    loadChildren: () => import('./candidato-modal/candidato-modal.module').then( m => m.CandidatoModalPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'oferta/:usuario',
    loadChildren: () => import('./oferta/oferta.module').then( m => m.OfertaPageModule)
  },
  {
    path: 'foto',
    loadChildren: () => import('./foto/foto.module').then( m => m.FotoPageModule)
  },
  {
    path: 'menuempresa/:idusuario',
    loadChildren: () => import('./menuempresa/menuempresa.module').then( m => m.MenuempresaPageModule)
  },
  {
    path: 'menucandidato',
    loadChildren: () => import('./menucandidato/menucandidato.module').then( m => m.MenucandidatoPageModule)
  },
  {
    path: 'listaoferta/:idusuario',
    loadChildren: () => import('./listaoferta/listaoferta.module').then( m => m.ListaofertaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
