import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-medicine-video',
  templateUrl: './medicine-video.page.html',
  styleUrls: ['./medicine-video.page.scss'],
})
export class MedicineVideoPage implements OnInit {


  private postReferance: AngularFirestoreCollection<{}>;
  private postReferanceSub: Subscription;
  private videos: {}[];
  private toast: HTMLIonToastElement;

  constructor(
    private afstore: AngularFirestore,
    private toastController: ToastController,
    private router: Router,
    private network: Network,

  ) { }

  ngOnInit() {
    this.postReferance = this.afstore.collection(`Videos/medicine/hellth`);
    this.postReferanceSub = this.postReferance.valueChanges().subscribe(obj => {
      //console.log(obj);
      this.videos = obj
    });
  }
  private deleteVideo(timestamp: string) {
    if (this.network.type !== "none") {
      this.afstore.doc(`Videos/medicine/hellth/${timestamp}`).delete().then(err => {
        this.presentToast("successfully Deleted the Video");
      });
    } else {
      this.presentToast("Check Your Internet Connection");
    }
  }

  ngOnDestroy() {
    //console.log("detstroy")
    this.postReferanceSub.unsubscribe();
  }

  private async presentToast(message: string) {
    try{
      this.toast.dismiss();
    }catch(err){}
    finally{
      this.toast = await this.toastController.create({
        message: message,
        duration: 3000
      });
      this.toast.present();
    }
    
  }

  private playVideo(id: string) {
    if (this.network.type !== "none") {
      this.router.navigate(["/menu/medicine-tabs/medicine/video/video-play/" + id])
    } else {
      this.presentToast("Check Your Internet Connection")
    }
  }

}
