import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export interface user  {
  avatar:string,
  id:number,
  email:string,
  first_name:string,
  last_name:string
}

export interface datarev {
  data: user[];
}

export interface userrev {
  data:user;
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService{
  user:user;
  unsub1:Subscription

  constructor(private http:HttpClient) { }

  getusers(){
    return this.http.get<datarev>('https://reqres.in/api/users');
  }

  getuser(id:number){
     return this.http.get<userrev>(`https://reqres.in/api/users/${id}`)
  }


}
