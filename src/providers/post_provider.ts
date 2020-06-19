
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


 
@Injectable()
export class PostProvider{
    public url: string = "http://localhost/Ionic/server_api/";
 
    constructor(
        public http : HttpClient
    ){
       
    }

    getData(){
        console.log('Entra a get data');
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(datos => console.log(datos));
    }

 
  
    postData(body,file){
        
       
                

       /* let headers = new HttpHeaders().set('Content-Type','application/json');
        let option = ({headers : headers});

         
        console.log(JSON.stringify(body));
        console.log(JSON.stringify(headers));

        return this.http.post(this.url + file, JSON.stringify(body)); */

        fetch(file, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify( body )          

        }).then(res => res.json())
        .then(datos => console.log(datos));

        this.http.post(this.url + file, {
            content: 'hello',
            submittedBy: 'Josh'
        }).subscribe((response) => {
            console.log(response);
        });
    }
 
 
}


