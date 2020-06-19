import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Usuario{
  usuario_id: string;
  usuario_estado: string;
  usuario_nombreReal: string;
  usuario_tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost/Ionic/server_api/proces-api.php';

  constructor(private http: HttpClient) { }
  create(elUsuario: Usuario){
    //return this.http.post(this.url, elUsuario);

  }

}


