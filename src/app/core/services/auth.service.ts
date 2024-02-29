import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userinfo:any;
userName:BehaviorSubject<string>=new BehaviorSubject('')
userid:string|undefined =''
  constructor(private _HttpClient:HttpClient) { }

  baseurl:string='https://ecommerce.routemisr.com/api/v1/auth/'
  register(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseurl + 'signup', userData);
  }
  login(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseurl + 'signin', userData);
  }
  decodeuser():void{
    const enccodetoken=localStorage.getItem('etoken');
    if(enccodetoken!==null){
      const decode = jwtDecode(enccodetoken);
      this.userinfo =decode;
      this.userid=this.userinfo.id
      this.userName.next(this.userinfo.name)
      

    
    }
  }
}
