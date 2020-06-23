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
  idOfertaModificar: number;
  usuarioEmpresa: string;
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
      this.id = this.ofertas[0].ofertaEmpleo_id;
      
          console.log(resp);
    });
    this.service.getUsuario(this.id).subscribe( resp => {
     
      this.usuarioEmpresa = resp.usuario_nombreReal;


  });
    
  }
  addRequisito(oferta: NuevaOferta){
   // this.idOfertaModificar = parseInt(this.id);
    // console.log(this.idOfertaModificar);
    this.router.navigate(['/requisito', oferta.ofertaempleo_id ]);

  }
  eliminarOferta(oferta: NuevaOferta ){
    console.log(oferta.ofertaEmpleo_id);
  }

  editarOferta(oferta: NuevaOferta ){
   
     console.log(oferta.ofertaempleo_id);
    this.router.navigate(['/ofertamodificar', oferta.ofertaempleo_id]);

  }

  detalleOferta(oferta: NuevaOferta ){
    
    this.router.navigate(['/ofertadetalle', oferta.ofertaempleo_id]);
  }


  

}
