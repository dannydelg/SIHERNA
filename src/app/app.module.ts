import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostProvider } from '../providers/post_provider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidatoModalPage } from './candidato-modal/candidato-modal.page';

import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';




import { WebView } from '@ionic-native/ionic-webview/ngx';


import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);


@NgModule({
  declarations: [AppComponent, CandidatoModalPage],
  entryComponents: [CandidatoModalPage],
  imports: [

  BrowserModule,
  HttpClientModule,
  
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  IonicModule,
  IonicStorageModule.forRoot(),
  IonicModule.forRoot(),
  AppRoutingModule],
  providers: [
    StatusBar,
    PostProvider,
    SplashScreen,
    Camera,
    FileOpener,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
