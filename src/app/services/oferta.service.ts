import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from './usuario.service';
import { Requisito } from './requisito.service';



export interface Oferta{
  //oferta_id: string;
  //oferta_enpresa: string;
  //oferta_categoria: string;
  //oferta_puesto: string;
  //oferta_numVcantes: string;
  //oferta_fecha: string;
 // oferta_pais: string;
  //oferta_provincia: string;

  pais_id: string;
  pais_nombre: string;
}
export interface NuevaOferta{
  oferta_id: string;
  oferta_empresaid: number;
  categoria: string;
  oferta_puesto: string;
  oferta_numVcantes: string;
  oferta_salario: number;
  oferta_requisito: string;
  fecha: string;
  oferta_pais: string;
  oferta_provincia: string;
  oferta_canton: string;
  distrito: string;
  oferta_otrassenas: string;
  oferta_distritoid: number;
  oferta_categoriaid: number;
  ofertaEmpleo_descripcionPuesto: string;
  ofertaEmpleo_id: string;
  ofertaEmpleo_numeroVacantes: string;
  ofertaEmpleo_Salario: string;
  ofertaempleo_id: string;
  ofertaEmpleo_duracionContrato: string;
  usuario_nombreReal: string;
  ofertaEmpleo_horario: string;
  ofertaEmpleo_fecha: string;
  pais_nombre: string;
  provincia_nombre: string;
  canton_nombre: string;
  distrito_nombre: string;
  usuario_nombreUsuario: string;
  

  
  

  pais_id: string;
  
}

export interface Provincias{
  provincia_id: string;
  provincia_nombre: string;
}
export interface Canton{
  canton_id: string;
  canton_nombre: string;
}
export interface Distrito{
  distrito_id: string;
  distrito_nombre: string;
}
export interface Categoria{
  categoria_id: string;
  categoria_nombre: string;
}



@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private url = 'http://localhost/Ionic/server_api/proces-oferta-api.php';
  private urlcategoria = 'http://localhost/Ionic/server_api/proces-categoria-api.php';
  private urluser = 'http://localhost/Ionic/server_api/proces-user-api.php';

  constructor(private http: HttpClient) { }

  getUsuario(id: string){
    return this.http.get<Usuario>(this.urluser  + '/?id_user=' + id);
  }

  getCategorias(){
    return this.http.get<[Categoria]>(this.urlcategoria);
  }

  getAll(){
    return this.http.get<[Oferta]>(this.url);

  }
  create(laOferta: Oferta){
    return this.http.post(this.url, laOferta);
  
  }

  insertarOferta(ofert: NuevaOferta){
   return this.http.post(this.url, ofert);
  }

 getProvincias(paisid: string){
  return this.http.get<[Provincias]>(this.url + '/?id_pais=' + paisid);
 }

 getCanton(provinsiaid: string){
  return this.http.get<[Canton]>(this.url + '/?prov_id=' + provinsiaid);
 }


  getDistrito(cantonid: string){
    return this.http.get<[Distrito]>(this.url + '/?cant_id=' + cantonid)
  }

  getOferta(id: string){
    return this.http.get<[NuevaOferta]>(this.url + '/?user_id=' + id);
  }
  getOfertaDetalle(id: string){
    return this.http.get<NuevaOferta>(this.url + '/?ofer_id=' + id);
  }


}
