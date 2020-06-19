import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CandidatoService } from '../services/candidato.service';
import { Candidato } from './../services/candidato.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.page.html',
  styleUrls: ['./showcustomer.page.scss'],
})
export class ShowcustomerPage implements OnInit {

  id: string;
  cand: Candidato[];

  constructor(
     private route: ActivatedRoute,
     private service: CandidatoService) {

   this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

  datosCandidato(id: string){
    this.service.get(id).subscribe(response => {
    this.cand = response;
    console.log(id);
    console.log(this.cand);
    });
    console.log(id);
  }

}
