import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from 'src/app/services/network/network.service';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.page.html',
  styleUrls: ['./video-play.page.scss'],
})
export class VideoPlayPage implements OnInit {

  private url: string;
  private networkStatus: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private network: NetworkService
  ) { }

  ngOnInit() {
    this.url = "https://www.youtube.com/embed/" + this.route.snapshot.paramMap.get('id') + "?rel=0&enablejsapi=1";
  }

  private PauseVideo() {
    let iframe = document.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');

  }

  ionViewDidLeave() {
    this.PauseVideo();
  }

  private Refreshing(refresher?) {
    if (this.network.network.type === "none") {
      this.networkStatus = false;
      let connectSubscription = this.network.connectSubscription.subscribe(() => {
        this.networkStatus = true;
        connectSubscription.unsubscribe();
        if (refresher) {
          refresher.target.complete();
        }
      });

    } else {
      this.networkStatus = false;
      setTimeout(() => {
        this.networkStatus = true;
      }, 100);
      if (refresher) {
        refresher.target.complete();
      }
    }
  }
}
