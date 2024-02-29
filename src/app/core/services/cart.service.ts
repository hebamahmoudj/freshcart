import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartNumber:BehaviorSubject<number>=new BehaviorSubject(0)
  //header object 
  // mytoken:any={token:localStorage.getItem('etoken')}
  //url after the bath
baseurl:string='https://ecommerce.routemisr.com/api/v1/'
//httpclient to call api
  constructor(private _HttpClient:HttpClient) { }
  //to add product to user cart 
  addtocart(pid:string):Observable<any>{
    return this._HttpClient.post(this.baseurl+'cart',{productId:pid})
  }
  //get user cart
  getloggedusercart():Observable<any>{
    return this._HttpClient.get(this.baseurl+'cart')

  }
  /////update quantity
  updateproductquentitiy(pid:string,pcount:number):Observable<any>{
    return this._HttpClient.put(this.baseurl+`cart/${pid}`,{
      count: pcount
  }
  
  )
  }

///////remove user cart/////
  removeItem(prodid:string):Observable<any>{
    return this._HttpClient.delete(this.baseurl+`cart/${prodid}`)
  }
  ///////clear user cart/////
  clearcart():Observable<any>{
    return this._HttpClient.delete(this.baseurl+`cart`)
  }
  

  checkout(id:string|null,orederinfo:object):Observable<any>{
   
    return this._HttpClient.post(` https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=https://hebamahmoudj.github.io/freshcart`,{shippingAddress:orederinfo})
    // https://65de626f9069d852900a0533--shimmering-marzipan-3c45dd.netlify.app
  }

  checkoutcash(id:string|null,orederinfo:object):Observable<any>{
   
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${id}`,{shippingAddress:orederinfo})
  }
}
