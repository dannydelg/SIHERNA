import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule, Form } from '@angular/forms';

@Component({
  selector: 'contactForm',
  templateUrl: './oferta-form.component.html',
  styleUrls: ['./oferta-form.component.scss'],
})

export class OfertaFormComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.contactForm = this.createFromGroup();
   }

  createFromGroup(){
    return new FormGroup({
      requisito: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }
  onSaveForm(){
    console.log('Guardar');
  }

}
