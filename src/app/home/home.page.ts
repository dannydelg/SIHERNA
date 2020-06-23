import { Component } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { CandidatoService, Candidato } from '../services/candidato.service';
import { ModalController } from '@ionic/angular';
import { CandidatoModalPage } from './../candidato-modal/candidato-modal.page';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../services/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  public usuario: Candidato;
  navCtrl: any;

  constructor(
    private service: CandidatoService,
    private router: Router,
    private modalCtrl: ModalController,
    public toastController: ToastController
  ) {}

  addCandidato(){
    //this.router.navigate(['/candidato']);
    this.modalCtrl.create({component: CandidatoModalPage}).then(modal => modal.present());
  }

  insertarUsuario(form: NgForm){
    console.log(form.value);
    const elUsuario = form.value;
    this.service.createUser(elUsuario).subscribe(response => {
     
     if (response){
      this.usuario =  response;
      console.log(this.usuario);
      if (this.usuario.usuario_tipousuario === 'empresa'){
        //this.navCtrl.navigateForward(`menuempresa/${this.usuario.usuario_id}`);
       
        this.router.navigate(['/menuempresa', this.usuario.usuario_id]);
        console.log(this.usuario.usuario_id);
      }else{

        this.router.navigate(['/menucandidato']);
      }
      
      

     }else{
      this.presentToast();

     }
     // console.log(response);
    });

    
  }

  registroUsuario(){
    this.router.navigate(['/addcustomer']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Error',
      message: 'Usuario no registrado',
      color: 'warning',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

}
