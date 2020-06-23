import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService, NuevaOferta, Categoria, Distrito, Canton, Provincias, Oferta } from '../services/oferta.service';

@Component({
  selector: 'app-ofertamodificar',
  templateUrl: './ofertamodificar.page.html',
  styleUrls: ['./ofertamodificar.page.scss'],
})
export class OfertamodificarPage implements OnInit {
  lasOfertas: Oferta[];
  lasProvincia: Provincias[];
  losCantones: Canton[];
  losDistrito: Distrito[];
  diaSelecionado: string;
  categorias: Categoria[];
  id: string[];
idOferta: string;
ofertaModificar: NuevaOferta;
ofertaSalari: string;
ofertaDescripcion: string;
cantVacantes: string;
duracionContrato: string;
fecha: string;
horarioOferta: string;
ofertaNombreEmpresa: string;
categoria: string;
pais: string;

  constructor(private route: ActivatedRoute, 
              private service: OfertaService) { 
    this.idOferta = this.route.snapshot.paramMap.get('idusuario');
    
  }

  ngOnInit() {
    this.service.getOfertaDetalle(this.idOferta).subscribe(resp => {
      this.ofertaModificar = resp;
      this.ofertaSalari = this.ofertaModificar[0].ofertaEmpleo_Salario;
      this.ofertaDescripcion = this.ofertaModificar[0].ofertaEmpleo_descripcionPuesto;
      this.cantVacantes = this.ofertaModificar[0].ofertaEmpleo_numeroVacantes;
     
      this.fecha = this.ofertaModificar[0].ofertaEmpleo_fecha;
      this.duracionContrato = this.ofertaModificar[0].ofertaEmpleo_duracionContrato;
      this.ofertaNombreEmpresa = this.ofertaModificar[0].usuario_nombreReal;

      this.horarioOferta = this.ofertaModificar[0].ofertaEmpleo_horario;
      this.pais = this.ofertaModificar[0].pais_nombre;
      this.categoria = this.ofertaModificar[0].categoria_OfertaEmpleo_nombre;
      console.log(resp);
      console.log(this.fecha);
   });

   this.service.getCategorias().subscribe(response => {
    this.categorias = response;
    console.log( response );
  });
  this.service.getAll().subscribe(response => {
    this.lasOfertas = response;
    // console.log(response);
  });
  }


  
  provinciaSeleccion(event: any){
    const indice = this.devuelveIndice(event.target.value.trim(), this.lasOfertas); 
    this.diaSelecionado = event.target.value ;
     this.id = this.diaSelecionado.split(' ');
    this.service.getProvincias(indice).subscribe( response => {
      this.lasProvincia = response;
      console.log(response);
    });
    console.log(this.diaSelecionado);
  }

  distritoSeleccion(event: any){
    const indice = this.devuelveIndiceDistrito(event.target.value.trim(), this.losCantones);
    this.service.getDistrito(indice).subscribe( response => {
    this.losDistrito = response;
    console.log(response);
    });
    console.log(indice);

  }

  devuelveIndice(pais: string, list: any){

    for (const i in list) {
      if(list[i].pais_nombre.trim() === pais) {
        return list[i].pais_id;
      }

    }
  }


  devuelveIndiceDistrito(canton: string, list: any){

    for (const i in list) {

      if(list[i].canton_nombre.trim() === canton) {
        return list[i].canton_id;
      }

    }
  }
  devuelveIndiceProvincia(pais: string, list: any){

    for (const i in list) {

      if(list[i].provincia_nombre.trim() === pais) {
        return list[i].provincia_id;
      }

    }
  }

  cantonSeleccion(event: any){

    const indice = this.devuelveIndiceProvincia(event.target.value.trim(), this.lasProvincia);
    this.diaSelecionado = event.target.value ;
    this.id = this.diaSelecionado.split(' ');
    this.service.getCanton(indice).subscribe( response => {
      this.losCantones = response;
      console.log(response);
    });
    console.log(this.id[0]);
  }



  BuscarIdDistrito(distrito: string, list: any  ){

    for (const i in list) {
     
      if (list[i].distrito_nombre.trim() === distrito) {
        return list[i].distrito_id;
      }

    }

  }

  BuscarIdCategoria(categoria: string, list: any){
    for (const i in list) {
     console.log(list[i].categoria_nombre.trim());
     console.log(categoria);
      if (list[i].categoria_nombre.trim() === categoria.trim()) {
        console.log(i);
        return list[i].categoria_id;
      }

    }

  }

 

}
