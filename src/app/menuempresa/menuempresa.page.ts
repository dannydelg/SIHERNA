import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { OfertaService, NuevaOferta } from '../services/oferta.service';

@Component({
  selector: 'app-menuempresa',
  templateUrl: './menuempresa.page.html',
  styleUrls: ['./menuempresa.page.scss'],
})
export class MenuempresaPage implements OnInit {
  id: string;
  empresaNombre: string;

  ofertas: NuevaOferta[];
  usuarioEmpresa: string;

  constructor(private menu: MenuController,
              private router: Router,
              private route: ActivatedRoute,
              private service: OfertaService) {
                
                this.id = this.route.snapshot.paramMap.get('idusuario');
                console.log(this.id);
                this.service.getUsuario(this.id).subscribe( resp => {
     
                  this.usuarioEmpresa = resp.usuario_nombreReal;
           
          
              });
               }

  

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  dirigirAOferta(){
    this.router.navigate(['/oferta', this.id]);
  }

  verOfertas(){
    this.router.navigate(['/listaoferta', this.id]);
  }
  

}
