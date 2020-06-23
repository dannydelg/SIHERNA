import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Requisito{
ofertaEmpleo_Requisitos_ofertaEmpleo: number;
requisitos_id: number;
requisitos_descripcion: string;
requisitos_tipo: string;
requisitos_experienciaLaboral: number;
requisitos_estado: string;
nivelEstudio_descripcion: string;
idioma_nombre: string;
idioma_nivel: string;
nivelEstudio_id: string;

}

@Injectable({
  providedIn: 'root'
})


export class RequisitoService {
  private url = 'http://localhost/Ionic/server_api/proces-requisito-api.php';

  constructor(private http: HttpClient) { }

  insertarRequisito(requisito: Requisito){
    return this.http.post(this.url, requisito);
   }

   getRequisito(id: string ){
    return this.http.get<[Requisito]>(this.url + '/?requisito_id=' + id);

  }
}
