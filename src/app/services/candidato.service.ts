import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.service';
//import { Candidato } from './candidato.service';

export interface Candidato{
  usuario_id: string;
  cedula: string;
  user: string;
  clave: string;
  nombre: string;
  direccion: string;
  foto: string;
  telefono: string; 
  email: string;
  usuario_tipousuario: string;
 

  
}

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private url = 'http://localhost/Ionic/server_api/proces-api.php';
  private url2 = 'http://localhost/Ionic/server_api/proces-user-api.php';
  private urlfoto = 'http://localhost/Ionic/server_api/proces-foto-api.php';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Candidato]>(this.url);

  }
  get(id: string){
    return this.http.get<[Candidato]>(this.url + '/?id=' + id);
  }

  create(cand: Candidato){
    return this.http.post(this.url, cand);

  }

  update(cand: Candidato, id: string){
    return this.http.put(this.url + '/' + id, cand);

  }
  remove(id: string){
    return this.http.delete(this.url + '/' + id);
  }

  createUser(elUsuario: Usuario) {
   return this.http.post<Candidato>(this.url2, elUsuario);
  }

  subirFoto(archivo: { nombreArchivo: any; base64textString: any; }) {
     
    return this.http.post(this.urlfoto, JSON.stringify( archivo ));
  }



}
