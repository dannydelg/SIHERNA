import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfertaService } from '../services/oferta.service';
import { RequisitoService, Requisito } from '../services/requisito.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.page.html',
  styleUrls: ['./requisito.page.scss'],
})
export class RequisitoPage implements OnInit {


  requisito: Requisito;
  idOferta: string;
  constructor(private service: RequisitoService,
              private route: ActivatedRoute,
              public toastController: ToastController ) {
     this.idOferta = this.route.snapshot.paramMap.get('idoferta');
     

   }

  ngOnInit() {
    console.log(this.idOferta);
  }

  guaradarRequisito(form: NgForm){

    if (form.valid){
    this.requisito = form.value;
    this.requisito.ofertaEmpleo_Requisitos_ofertaEmpleo = parseInt(this.idOferta);
    console.log(this.requisito);

    this.service.insertarRequisito(this.requisito).subscribe(resp => {
    
   console.log(resp);

    });


    }else{
      this.presentToast();

    }


  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Formulario Requisito invalido ',
      message: 'Campos requeridos, revise el formulario',
      color: 'danger',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

}
