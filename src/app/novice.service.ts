import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoviceService {

  constructor() { }
  getuserdata(){
   return[
     {id:123,name:"ram", profession:"hero",remuneration:"20k"},
     {id:123,name:"robert", profession:"villan",remuneration:"10k"},
     {id:123,name:"rani", profession:"heroine",remuneration:"2k"}
   ]
  }
}
