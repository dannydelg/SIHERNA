import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { finalize } from 'rxjs/operators';
const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {
  images: any[];
  constructor(
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private webView: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private storage: Storage,
    private plt: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStorageImages();
    });
  }

  loadStorageImages(){
    this.storage.get(STORAGE_KEY).then(images => {
      if(images){
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr){
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({name: img, path: resPath, filePath: filePath });
          
        }
      }

    });

    
  }

  pathForImage(img){
    if(img === null){
      return '';
    }else{
      let coverted = this.webView.convertFileSrc(img);
      return coverted;
    }
  }

  async presentToast(text){
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 4000

    });
    toast.present();
  }

  async selectImage(){
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
          {
          text: 'Galeria',
          handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          },
        {
          text: 'Camara',
          handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel'
          }

    ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType){
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagenPath => {
      var currenName = imagenPath.substr(imagenPath.lastIndexOf('/' + 1));
      var correnPath = imagenPath.substr(0, imagenPath.lastIndexOf('/' + 1));
      this.copyFileToLocalDir(correnPath, currenName, this.createFileName());
    });
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(_ => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error while storing file');
    } );
  }

  updateStoredImages(name){
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr){
        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));

      }else{
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);
      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges();
    });

  }

  deleteImage(imgEntry, position){
    this.images.slice(position,1);
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name =>name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastindexOf('/') + 1);
      this.file.removeFile(correctPath, imgEntry.name).then(res =>{
        this.presentToast('Foto eliminada.');
      });
    });

  }
  startUpload(imgEntry){
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
    .then(entry => {
      (<FileEntry>entry).file(file => this.readFile(file))
    })
    .catch(err => {
      this.presentToast('Error whiel reading file.');
    });
  }

  readFile(file: any){
    const reader = new FileReader();
    reader.onloadend = () =>{
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData){
    const loading = await this.loadingController.create({
      message: 'Uploaded',
    });
    await loading.present();

    this.http.post('http://localhost:8100/Ionic/server_api/subirfoto.php', formData)
    .pipe(
      finalize(() => {
        loading.dismiss();
      })
    )
      .subscribe(res => {
          if (res['success']) {
            this.presentToast('Archivo subido');
          }else{
            this.presentToast('Falla al subir el archivo');
          }
      });
  }


  createFileName(){
    var d = new Date(),
        n= d.getTime(),
    newFileName = n +".jpg";
    return newFileName;
  }



}
