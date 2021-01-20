import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestHardware } from '../models/hardware';

@Injectable()
export class HadwareService {

  apiUrl = 'http://localhost:8080/'

  
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
  constructor(
     private httpClient: HttpClient
  ) { 
    
  }

  public create(requestHardware): Observable<any>{
    console.log(requestHardware);
    return this.httpClient.post(this.apiUrl+ 'hardware/', requestHardware, this.httpOptions );
  }

  public List(): Observable<any>{
    
    return this.httpClient.get(this.apiUrl+ 'hardware/');
  
  }
  public remove(id): Observable<any>{
    return this.httpClient.get(this.apiUrl+ 'hardware/remove/' + id );
  }
  public edit(requestHardware, id){
    return this.httpClient.post(this.apiUrl+ 'hardware/edit/' + id, requestHardware, this.httpOptions );
  }


}
