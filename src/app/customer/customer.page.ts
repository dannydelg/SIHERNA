import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from '../services/candidato.service';
import { Candidato } from './../services/candidato.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  losCandidatos: Candidato[];
  
 

  constructor(	private service: CandidatoService,
                private router: Router,
                private navCtrl: NavController,
                private ref: ChangeDetectorRef)
  	 { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.losCandidatos = response;
      
      console.log(response);
      this.ref.detectChanges();
    });
  }

  

  addCustomer(){
  	this.router.navigate(['/addcustomer']);
  	console.log('addcustomer');
  }

  refrescar(){
    this.service.getAll().subscribe(response => {
      this.losCandidatos = response;
      console.log(response);
    });
  }

  datosCandidato(id: string){
    //this.service.get(id).subscribe(response => {
      //this.losCandidatos = response;
     // this.losCandidatos = response;
      // this.router.navigate(['/showcustomer', {cand: 'this.losCandidatos'}]);
      this.navCtrl.navigateForward(`showcustomer/${id}`);
      
      console.log(id);
    //});
  }

}
