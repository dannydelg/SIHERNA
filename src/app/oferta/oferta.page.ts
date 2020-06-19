import { Component, OnInit } from '@angular/core';
import { Oferta, OfertaService, Provincias, Canton, Distrito, Categoria, NuevaOferta } from '../services/oferta.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

//import { FormBuilder, Validators} from '@angular/forms'
import { Usuario } from '../services/usuario.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.page.html',
  styleUrls: ['./oferta.page.scss'],
})




export class OfertaPage implements OnInit {

  lasOfertas: Oferta[];
  lasProvincia: Provincias[];
  losCantones: Canton[];
  losDistrito: Distrito[];
  id: string[];
  indice: any;
  diaSelecionado: string;
  categorias: Categoria[];
  contactForm: FormGroup;
  categoria: any;
  condCategoria: boolean = false;
  condDescripcion: boolean =false;
  condRequisito: boolean =false;
  condVacante: boolean = false;
  condFecha: boolean = false;
  condUbicacion: boolean = false;
  nuevaOferta: NuevaOferta;
  idusuario: string;
  nombre_usuario: string;
  usuario_empresa: Usuario;

  constructor(private service: OfertaService,
     public toastController: ToastController,
     private router: Router,
     private route: ActivatedRoute
              ) {
                this.idusuario = this.route.snapshot.paramMap.get('usuario');
               }

  ngOnInit() {
    this.service.getUsuario(this.idusuario).subscribe( resp => {
      
      this.usuario_empresa = resp;
      this.nombre_usuario = this.usuario_empresa.usuario_nombreReal;
      this.idusuario = this.usuario_empresa.usuario_id;
      console.log('resp' + this.usuario_empresa.usuario_nombreReal );

    });
    
    this.service.getAll().subscribe(response => {
      this.lasOfertas = response;
      // console.log(response);
    });
    this.service.getCategorias().subscribe(response => {
      this.categorias = response;
      console.log( response );
    });
  }

  provinciaSeleccion(event: any){
    const indice = this.devuelveIndice(event.target.value.trim(), this.lasOfertas); 
    this.diaSelecionado = event.target.value ;
    this.id = this.diaSelecionado.split(' ');
    this.service.getProvincias(indice).subscribe( response => {
      this.lasProvincia = response;
      console.log(response);
    });
    console.log(this.diaSelecionado);
  }

  distritoSeleccion(event: any){
    const indice = this.devuelveIndiceDistrito(event.target.value.trim(), this.losCantones);
    this.service.getDistrito(indice).subscribe( response => {
    this.losDistrito = response;
    console.log(response);
    });
    console.log(indice);

  }

  devuelveIndice(pais: string, list: any){

    for (const i in list) {
      if(list[i].pais_nombre.trim() === pais) {
        return list[i].pais_id;
      }

    }
  }


  devuelveIndiceDistrito(canton: string, list: any){

    for (const i in list) {

      if(list[i].canton_nombre.trim() === canton) {
        return list[i].canton_id;
      }

    }
  }
  devuelveIndiceProvincia(pais: string, list: any){

    for (const i in list) {

      if(list[i].provincia_nombre.trim() === pais) {
        return list[i].provincia_id;
      }

    }
  }

  cantonSeleccion(event: any){

    const indice = this.devuelveIndiceProvincia(event.target.value.trim(), this.lasProvincia);
    this.diaSelecionado = event.target.value ;
    this.id = this.diaSelecionado.split(' ');
    this.service.getCanton(indice).subscribe( response => {
      this.losCantones = response;
      console.log(response);
    });
    console.log(this.id[0]);
  }

  createFromGroup(){
    return new FormGroup({
      requisito: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    });
  }

  BuscarIdDistrito(distrito: string, list: any  ){

    for (const i in list) {
     
      if (list[i].distrito_nombre.trim() === distrito) {
        return list[i].distrito_id;
      }

    }

  }

  BuscarIdCategoria(categoria: string, list: any){
    for (const i in list) {
     console.log(list[i].categoria_nombre.trim());
     console.log(categoria);
      if (list[i].categoria_nombre.trim() === categoria.trim()) {
        console.log(i);
        return list[i].categoria_id;
      }

    }

  }

  guardarFormulario(form: NgForm){
   
    
    this.nuevaOferta = form.value;
    this.nuevaOferta.oferta_empresaid = parseInt(this.idusuario);
    
    let id_distrito = this.BuscarIdDistrito(this.nuevaOferta.distrito, this.losDistrito );
    let id_categoria = this.BuscarIdCategoria(this.nuevaOferta.categoria, this.categorias);
    let id_dist = parseInt(id_distrito);
    let id_cat = parseInt(id_categoria);
    let fecha = this.nuevaOferta.fecha.split('T');
    
    this.nuevaOferta.fecha = fecha[0];
    console.log(this.nuevaOferta.fecha);
    this.nuevaOferta.oferta_distritoid = id_dist;
    this.nuevaOferta.oferta_categoriaid = id_cat;
    console.log(this.nuevaOferta);
    
    if (form.valid){
      // Si el form es valido lo enviamos al servicio para que lo envia a la base de datos
      this.service.insertarOferta(this.nuevaOferta).subscribe(response => {
        console.log(response);
        this.confirmacionToast();
        
        this.router.navigate(['/menuempresa', this.idusuario]);
        
  
      });


    }else{      
     // Si el form no es valido le enviamos las notificaciones al usuario 
      this.presentToast();
      
      if(form.value.categoria === ""){
        this.condCategoria = true; 
      }
      if(form.value.descripcion === ""){
        this.condDescripcion = true;
      }
      if(form.value.requisito === ""){
        this.condRequisito = true;
      }
      if(form.value.vacantes === ""){
        this.condVacante = true;
      }
      if(form.value.fecha === ""){
        this.condFecha = true;
      }

      if(form.value.pais === "" || form.value.provincia === "" || 
      form.value.canton === "" || form.value.distrito === ""){
        this.condUbicacion = true;
      }      

   
     
      
   
    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Formulario invalido ',
      message: 'Campos requeridos, revise el formulario',
      color: 'dark',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

  async confirmacionToast() {
    const toast = await this.toastController.create({
      header: ' ',
      message: 'Oferta guardada satisfactoriamente',
      color: 'primary',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

  
    
   


}
