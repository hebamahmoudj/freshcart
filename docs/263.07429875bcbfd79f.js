"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[263],{5263:(u,n,e)=>{e.r(n),e.d(n,{BranddetailsComponent:()=>a});var o=e(6814),t=e(4769),d=e(0),l=e(1120);let a=(()=>{class c{constructor(s,i){this._ProductService=s,this._ActivatedRoute=i,this.brandid=""}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:s=>{this.brandid=s.get("id")}}),this._ProductService.getBrandDetails(this.brandid).subscribe({next:s=>{this.brandDetails=s.data}})}static#t=this.\u0275fac=function(i){return new(i||c)(t.Y36(d.M),t.Y36(l.gz))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-branddetails"]],standalone:!0,features:[t.jDz],decls:8,vars:3,consts:[[1,"p-4","my-3","shadow","w-75","mx-auto","bg-main-light"],[1,"row","g-4","justify-content-center","align-items-center"],[1,"col-md-4"],[1,"w-100",3,"src","alt"],[1,"col-md-8"]],template:function(i,m){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div"),t._UZ(4,"img",3),t.qZA()(),t.TgZ(5,"div",4)(6,"h1"),t._uU(7),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("src",m.brandDetails.image,t.LSH)("alt",m.brandDetails.name),t.xp6(3),t.Oqu(m.brandDetails.name))},dependencies:[o.ez]})}return c})()},0:(u,n,e)=>{e.d(n,{M:()=>l});var o=e(5619),t=e(4769),d=e(9862);let l=(()=>{class a{constructor(r){this._HttpClient=r,this.scrolly=new o.X(!1)}getAllProducts(r=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${r}`)}getAllcategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getproductdetails(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${r}`)}getcategorydetails(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${r}`)}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}getBrandDetails(r){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${r}`)}static#t=this.\u0275fac=function(s){return new(s||a)(t.LFG(d.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);