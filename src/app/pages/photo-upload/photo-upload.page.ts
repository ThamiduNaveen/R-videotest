import { Component, OnInit } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.page.html',
  styleUrls: ['./photo-upload.page.scss'],
})
export class PhotoUploadPage implements OnInit {
  //private camera:Camera
  constructor() { }

  ngOnInit() {
  }

  // base64Image;

  // getPhoto(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64 (DATA_URL):
  //    this.base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  // }

}
