import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map, timestamp } from 'rxjs/operators';
import { ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network/network.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.page.html',
  styleUrls: ['./upload-video.page.scss'],
})
export class UploadVideoPage implements OnInit {


  private apiKey: string = "AIzaSyCeSiJWg5Oy0ZDC3EBJw-VacPBI5SLYQwo";
  private newVideoUrl: string = "";

  private videoId: string = "";
  private thumbNail: string = "";
  private description: string = "";
  private toast: HTMLIonToastElement;
  private postReferanceSub: Subscription;
  private videos: any[];
  private alertStatus: string = "";

  constructor(
    private http: Http,
    private toastController: ToastController,
    private afstore: AngularFirestore,
    private route: Router,
    private network: NetworkService, 
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.postReferanceSub = this.afstore.collection(`Videos/medicine/hellth`).valueChanges().subscribe(obj => {
      //console.log(obj);
      this.videos = obj
    });
  }

  private getId(url: string): string {
    try {
      let id = url.split('v=')[1].split('&')[0];
      return id;
    } catch (err) {
      this.newVideoUrl = "";
      this.presentToast('Please Enter a valid URL.');
      return null;
    }

  }

  private getVideo(url: string) {
    let id = this.getId(url);

    if (id) {
      this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + id + "&key=" + this.apiKey).pipe(
        map(res => {
          return res.json()['items'];
        })
      ).subscribe(data => {
        //console.log("data :", data);
        try {
          this.thumbNail = data[0].snippet.thumbnails.standard.url;
          this.description = data[0].snippet.title;
          this.videoId = id;
        } catch (err) {
          try {
            this.thumbNail = data[0].snippet.thumbnails.default.url;
          } catch (err) {
            this.description = "";
            this.videoId = "";
            this.newVideoUrl = "";
            this.presentToast("Please check the url");
          }

        }
      }, err => {
        //console.log("data :", err)
        this.presentToast("Something went wrong. Check your connection and try again")
      });
    }


  }

  private isVideoAvailable(id: string): string {
    
    for(let video of this.videos) {
      if (video.id === id) {

        return video.timestamp;
        
      }
    }
    return ;

  }

  private uploadVideo() {
    let timestamp = this.isVideoAvailable(this.videoId);
    if (timestamp) {
      this.presentAlertConfirm(timestamp);
    }else{
      this.generalUpload();
    }
    
  }

  private generalUpload(){
    if (this.network.network.type !== 'none') {
      const currentDateTime = 2552750023644-(new Date().getTime());
      //console.log(currentDateTime);
      this.afstore.doc(`Videos/medicine/hellth/${currentDateTime}`).set({

        description: this.description,
        url: this.thumbNail,
        id: this.videoId,
        timestamp: currentDateTime

      }).then(err => {
        this.presentToast("successfully uploaded Video");
      });
      this.videoId = "";
      this.thumbNail = "";
      this.description = "";
      this.newVideoUrl = "";
      this.route.navigate(['/menu/medicine-tabs/medicine/video'])
    } else {
      this.presentToast("Check your internet connection and try again")
    }

  }

  private repalceVideo(timestamp:string){
    if (this.network.network.type !== "none") {
      this.afstore.doc(`Videos/medicine/hellth/${timestamp}`).delete().then(err => {
        this.generalUpload();
      });
    } else {
      this.presentToast("Check Your Internet Connection");
    }
  }

  private async presentToast(message: string) {
    try {
      this.toast.dismiss();
    } catch (err) { }
    finally {
      this.toast = await this.toastController.create({
        message: message,
        duration: 3000
      });
      this.toast.present();
    }

  }

  async presentAlertConfirm(timestamp:string) {
    const alert = await this.alertController.create({
      header: 'Note',
      message: 'Video is already <strong>available.</strong>',
      cssClass: 'alert',
      buttons: [
        {
          text: 'Keep both',
          handler: () => {
            this.generalUpload();
          }
        },
        {
          text: 'Replace',
          handler: () => {
            this.repalceVideo(timestamp);
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            this.alertStatus = "";
            this.videoId = "";
            this.thumbNail = "";
            this.description = "";
            this.newVideoUrl = "";
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnDestroy() {
    //console.log("detstroy")
    this.postReferanceSub.unsubscribe();
  }


}
