import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  scrolly:BehaviorSubject<boolean>=new BehaviorSubject(false)
  constructor(private _HttpClient:HttpClient) { }
  getAllProducts(pagenum:number=1):Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pagenum}`)
  }
  getAllcategories():Observable<any>{
    return  this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
getproductdetails(id:string|null):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

}


getcategorydetails(id:string|null):Observable<any>{
  return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
}
getAllBrands():Observable<any>{
 return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
}
getBrandDetails(id:string|null):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
}
}
