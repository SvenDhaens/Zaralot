import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CuServerInfo} from '../entities/cu-server-info';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


const CU_SERVERS_ENDPOINT = 'https://api.camelotunchained.com/servers';

@Injectable()
export class CuServersService {

  constructor(private http: HttpClient) {
  }

  getCuServerInfo(): Observable<Array<CuServerInfo>> {
    return this.http.get<Array<CuServerInfo>>(CU_SERVERS_ENDPOINT).map((list: any[]) => {
      return list.map(item => {
        return {
          name: item.name,
          channelID: item.channelID,
          status: item.status,
          accessLevel: item.accessLevel
        } as CuServerInfo;
      });
    });
  }

}
