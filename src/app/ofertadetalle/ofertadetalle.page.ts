import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService, NuevaOferta } from '../services/oferta.service';
import { NavController, Platform } from '@ionic/angular';
import { PdfMakeWrapper, Txt,  Img } from 'pdfmake-wrapper';
import { Usuario } from '../services/usuario.service';
import { RequisitoService, Requisito } from '../services/requisito.service';






@Component({
  selector: 'app-ofertadetalle',
  templateUrl: './ofertadetalle.page.html',
  styleUrls: ['./ofertadetalle.page.scss'],
})

export class OfertadetallePage implements OnInit {


  idOferta: string;
  oferta: NuevaOferta;

ofertaModificar: NuevaOferta;
ofertaSalari: string;
ofertaDescripcion: string;
cantVacantes: string;
duracionContrato: string;
fecha: string;
horarioOferta: string;
ofertaNombreEmpresa: string;
categoria: string;
pais: string;
provincia: string;
canton: string;
distrito: string;
Usuario: string;

losRequisitos: Requisito[];

  constructor(private route: ActivatedRoute,
              private service: OfertaService,
              private serviceRequisito: RequisitoService,
              public navCtrl: NavController,
             
            
              ) {
   this.idOferta = this.route.snapshot.paramMap.get('oferta');
   console.log(this.idOferta);
  }

  ngOnInit() {
    this.service.getOfertaDetalle(this.idOferta).subscribe( resp => {
      this.oferta = resp;
      this.ofertaSalari = this.oferta[0].ofertaEmpleo_Salario;
      this.ofertaDescripcion = this.oferta[0].ofertaEmpleo_descripcionPuesto;
      this.cantVacantes = this.oferta[0].ofertaEmpleo_numeroVacantes;
     
      this.fecha = this.oferta[0].ofertaEmpleo_fecha;
      this.duracionContrato = this.oferta[0].ofertaEmpleo_duracionContrato;
      this.ofertaNombreEmpresa = this.oferta[0].usuario_nombreReal;

      this.horarioOferta = this.oferta[0].ofertaEmpleo_horario;
      this.pais = this.oferta[0].pais_nombre;
      this.categoria = this.oferta[0].categoria_OfertaEmpleo_nombre;
      this.provincia = this.oferta[0].provincia_nombre;
      this.canton = this.oferta[0].canton_nombre;
      this.Usuario = this.oferta[0].usuario_nombreUsuario;
      this.distrito = this.oferta[0].distrito_nombre;


      console.log(this.oferta);
    });

    this.serviceRequisito.getRequisito(this.idOferta).subscribe(response => {
        this.losRequisitos = response;
        console.log(this.losRequisitos);
    });

  }
  async cargarImagen(){
    const pdf = new PdfMakeWrapper();

    pdf.images({
        picture1: await new Img('https://cloudfb-17952.firebaseapp.com/').build(),


    });

}




  crearPdf(){
    
    let fecha =  this.fecha.split(' ');
    const pdf = new PdfMakeWrapper();

    pdf.header('         Reportes de empresas');
    pdf.footer('Reportes empresariales, usuario ' + this.Usuario );
    pdf.add( new Txt(this.ofertaNombreEmpresa ).alignment('center').fontSize(28).bold().italics().end),
    pdf.add( new Txt( new Date().toDateString() ).alignment('right').fontSize(12).end),
   // pdf.watermark(this.ofertaNombreEmpresa + 'S.A.'),
  
    pdf.add( new Txt(this.ofertaDescripcion + '\n' + '\n' +

    'Categoria: ' + this.categoria +  '\n' +
    'Duración del contrato: ' + this.duracionContrato +  '\n' +
    'Horario: ' + this.horarioOferta +  '\n' +
    'Fecha: ' + fecha[0] +  '\n' +
    'Vacantes: ' + this.cantVacantes  +  '\n' +
    'Salario: $' + this.ofertaSalari  +  '\n' +
    'Ubicación: Pais ' + this.pais +  ' Provincia ' + this.provincia  +  ', Canton ' + this.canton +  
    ', Distrito  ' + this.distrito

    ).bold().italics().end
    );
    pdf.add( new Txt('------------------------------------------------------------------------------------------------------------------------------').end);
    pdf.add( new Txt ('Requisitos: \n').bold().fontSize(24).end);
    
    this.losRequisitos.forEach( (e) => { pdf.add( new Txt( '------------------------------------' ).end );
                                         pdf.add( new Txt(e.nivelEstudio_descripcion ).end );
                                         pdf.add( new Txt(e.requisitos_tipo.substr(0, 1).toLocaleUpperCase() + 
                                         e.requisitos_tipo.substr(1, e.requisitos_tipo.length)).end );
                                         pdf.add( new Txt( e.requisitos_experienciaLaboral.toString() + ' años de experincias.' ).end );
                                         if (e.nivelEstudio_id.length > 5 ){
                                         pdf.add( new Txt( 'Nivel de lengua: ' + e.nivelEstudio_id ).end );
                                        }
    
  } );
    pdf.create().open();
  

  }

  descargarPdf(){
    this.cargarImagen();
    let fecha =  this.fecha.split(' ');
    const pdf = new PdfMakeWrapper();



    pdf.header('         Reportes de empresas');
    pdf.footer('Reportes empresariales, usuario ' + this.Usuario );
    pdf.add( new Txt(this.ofertaNombreEmpresa ).alignment('center').fontSize(28).end),
    pdf.add( new Txt( new Date().toDateString() ).alignment('right').fontSize(12).end),
   // pdf.watermark(this.ofertaNombreEmpresa + 'S.A.'),
  
    pdf.add( new Txt(this.ofertaDescripcion + '\n' + '\n' +
    'Categoria: ' + this.categoria +  '\n' +
    'Duración del contrato: ' + this.duracionContrato +  '\n' +
    'Horario: ' + this.horarioOferta +  '\n' +
    'Fecha: ' + fecha[0] +  '\n' +
    'Vacantes: ' + this.cantVacantes  +  '\n' +
    'Salario: $' + this.ofertaSalari  +  '\n' +
    'Ubicación: ' + this.pais +  ' ' + this.provincia  +  ' ' + this.canton

    ).bold().italics().end
    
    );
 
    pdf.create().download();

    
  }

}
