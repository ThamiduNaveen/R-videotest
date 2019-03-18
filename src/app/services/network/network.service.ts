import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(public network: Network) { }

  public disconnectSubscription: Observable<any> = this.network.onDisconnect();
  public connectSubscription: Observable<any> = this.network.onConnect();
  
}
