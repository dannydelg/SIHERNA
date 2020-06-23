import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NuevaOferta } from '../services/oferta.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-candidato-modal',
  templateUrl: './candidato-modal.page.html',
  styleUrls: ['./candidato-modal.page.scss'],
})
export class CandidatoModalPage implements OnInit {
  oferta: string;
  constructor( private route: ActivatedRoute, public modalController: ModalController) {
    this.oferta = this.route.snapshot.paramMap.get('oferta');
    console.log(this.oferta);
  }

  ngOnInit() {
  }


  
    async presentModal() {
      const modal = await this.modalController.create({
        component: CandidatoModalPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }

}
