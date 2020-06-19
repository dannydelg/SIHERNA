import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OfertaService, NuevaOferta } from '../services/oferta.service';

@Component({
  selector: 'app-listaoferta',
  templateUrl: './listaoferta.page.html',
  styleUrls: ['./listaoferta.page.scss'],
})
export class ListaofertaPage implements OnInit {

  id: string;
  ofertas: NuevaOferta[];
  constructor(private route: ActivatedRoute,
              private service: OfertaService,
              private router: Router
    
  ) {
    this.id = this.route.snapshot.paramMap.get('idusuario');
    console.log(this.id);
   }

  ngOnInit() {
    this.service.getOferta(this.id).subscribe(resp => {
      this.ofertas = resp;
      console.log(this.ofertas);
    });
    
  }
  detalleOferta(oferta: string){
    console.log(oferta);
    //this.router.navigate(['/candidato-modal', oferta]);

  }
  eliminarOferta(oferta: NuevaOferta ){
    console.log(oferta.ofertaEmpleo_id);
  }

  editarOferta(oferta: NuevaOferta ){
    console.log(oferta.ofertaEmpleo_id);
  }


  

}
