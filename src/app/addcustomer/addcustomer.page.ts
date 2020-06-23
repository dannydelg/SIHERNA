
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostProvider } from '../../providers/post_provider';
import { Router } from '@angular/router';
import { CandidatoService } from '../services/candidato.service';
import { Candidato } from './../services/candidato.service';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { CandidatoModalPage } from './../candidato-modal/candidato-modal.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerPage } from '../customer/customer.page';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  archivo = {
    nombreArchivo: '',
    base64textString: ''
  }

  candidato: Candidato;
  files: any;
  file: any;
  reader: FileReader;
  binaryString: any;
  selecteFile: any;
 
  constructor(

  private service: CandidatoService,
  private modalCtrl: ModalController,
  private http: HttpClient,
  private router: Router,
  private ref: ChangeDetectorRef,
  private navCtrl: NavController,
  public toastController: ToastController
) { }

  ngOnInit() {
// this.service.getAll().subscribe(response => {console.log(response)});
  }



  insertarUsuario (form: NgForm){
    if (form.valid){
      // Si el form es valido lo enviamos al servicio para que lo envia a la base de datos
 
      this.candidato = form.value;
      this.service.create(this.candidato).subscribe(response => {
      console.log(response);
        
       this.router.navigate(['/home']);
       this.ref.detectChanges();
  
      });
  
     
  
  
    }else{      
     // Si el form no es valido le enviamos las notificaciones al usuario 
      this.presentToast();
    }

  }
 

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Formulario invalido ',
      message: 'Campos requeridos, revise el formulario',
      color: 'danger',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }




/*
  uploadImage(event: any){
    console.log(event.target.files);
    this.selecteFile = (event.target.files[0] as File);

  }

  sendImage(){

    this.file = this.selecteFile;
    this.archivo.nombreArchivo = this.file.name;
    this.reader.onload = this._handlerReaderLoader.bind(this.file);
    this.reader.readAsBinaryString(this.file);

    this.service.subirFoto(this.archivo).subscribe(response => {
      console.log(response);
    });

  }

  _handlerReaderLoader(readerEvent: any){
    this.binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(this.binaryString);
    return this.archivo.base64textString;

  }


    subirFoto(event: any){
    //console.log(event.target.value);
    
    this.files = event.target.files;
    this.file = this.files[0];
    console.log(event.target.files[0]);
    this.archivo.nombreArchivo = this.file.name;
    this.reader.onload = this._handlerReaderLoader.bind(event);
    this.reader.readAsBinaryString(this.file);   


  }
*/

}