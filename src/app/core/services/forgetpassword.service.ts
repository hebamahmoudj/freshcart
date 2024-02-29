import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
  
  constructor(private _HttpClient:HttpClient) { }

  baseurl:string='https://ecommerce.routemisr.com/api/v1/auth/'

  forgotPasswords(forgetpassword:object):Observable<any>{
    return this._HttpClient.post(this.baseurl+"forgotPasswords",forgetpassword)
  }
  resetcode(resetcode:object):Observable<any>{
return this._HttpClient.post(this.baseurl+'verifyResetCode',resetcode)
  }
  resetpassword(resetpassform:object):Observable<any>{
  
    return this._HttpClient.put(this.baseurl+'resetPassword',resetpassform)
  }
}
