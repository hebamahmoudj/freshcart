import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
wishlistnums:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient) { }
  baseurl:string="https://ecommerce.routemisr.com/api/v1/";
  mytoken:any={token:localStorage.getItem('etoken')}
  addproductTowishlist(pid:string|undefined):Observable<any>{
    return this._HttpClient.post(this.baseurl+'wishlist',{
      productId: pid
  })
  }
  getloggeduserwishlis():Observable<any>{
    return this._HttpClient.get(this.baseurl+'wishlist')
  }
  removefromwishlist(pid:string|undefined):Observable<any>{
    return this._HttpClient.delete(this.baseurl+`wishlist/${pid}`)
  }

}
