import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilsService } from '../utils/utils.service';
@Injectable({
  providedIn: 'root',
})
export class SocketService {
  readonly url = environment.baseUrl;
  constructor(private utils: UtilsService) {
    this.socket = io.connect(environment.socketUrl, {
      query: {
        token: this.utils.getToken(),
      },
    });
  }
  public socket;
}
