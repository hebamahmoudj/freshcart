"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[263],{5263:(d,c,r)=>{r.r(c),r.d(c,{BranddetailsComponent:()=>a});var o=r(6814),t=r(4769),m=r(0),l=r(1120);let a=(()=>{class n{constructor(s,i){this._ProductService=s,this._ActivatedRoute=i,this.brandid=""}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:s=>{this.brandid=s.get("id")}}),this._ProductService.getBrandDetails(this.brandid).subscribe({next:s=>{this.brandDetails=s.data}})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(m.M),t.Y36(l.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-branddetails"]],standalone:!0,features:[t.jDz],decls:8,vars:3,consts:[[1,"p-4","my-3","shadow","w-75","mx-auto","bg-main-light"],[1,"row","g-4","justify-content-center","align-items-center"],[1,"col-md-4"],[1,"w-100",3,"src","alt"],[1,"col-md-8"]],template:function(i,u){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div"),t._UZ(4,"img",3),t.qZA()(),t.TgZ(5,"div",4)(6,"h1"),t._uU(7),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("src",u.brandDetails.image,t.LSH)("alt",u.brandDetails.name),t.xp6(3),t.Oqu(u.brandDetails.name))},dependencies:[o.ez]})}return n})()},0:(d,c,r)=>{r.d(c,{M:()=>l});var o=r(5619),t=r(4769),m=r(9862);let l=(()=>{class a{constructor(e){this._HttpClient=e,this.scrolly=new o.X(!1)}getAllProducts(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)}getAllcategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getproductdetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}getcategorydetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}getallsubcatwgories(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories?page=${e}`)}getspecificsubcategory(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${e}`)}getallsubcategiesoncategory(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}/subcategories`)}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}getBrandDetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(s){return new(s||a)(t.LFG(m.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);