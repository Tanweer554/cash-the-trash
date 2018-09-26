import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

//import "rxjs/add/operator/catch";
//import "rxjs/add/observable/throw";

import { Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class GethttpService {

  constructor(private http:HttpClient) { }
  getjsondata(){
    return this.http.get("http://jsonplaceholder.typicode.com/postss")
    .catch((error)=>{
      return Observable.throw(error);
    })
  }
}
