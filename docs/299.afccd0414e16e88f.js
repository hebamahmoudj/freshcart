"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[299],{5299:(m,a,s)=>{s.r(a),s.d(a,{BrandsComponent:()=>d});var c=s(6814),l=s(1120),t=s(4769),o=s(0);const u=function(n){return["/branddetails",n]};function e(n,p){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h1",6),t._uU(4),t.qZA()()()),2&n){const r=p.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,u,r._id)),t.xp6(1),t.Q6J("src",r.image,t.LSH)("alt",r.name),t.xp6(2),t.Oqu(r.name)}}let d=(()=>{class n{constructor(r){this._ProductService=r}ngOnInit(){this._ProductService.getAllBrands().subscribe({next:r=>{console.log(r.data),this.allBrands=r.data}})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(o.M))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"p-5","my-5"],[1,"row","g-4"],["class","col-sm-6  col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"rounded","shadow","border","border-success","p-4",3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"text-main","h4"]],template:function(i,_){1&i&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,e,5,6,"div",2),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngForOf",_.allBrands))},dependencies:[c.ez,c.sg,l.rH]})}return n})()},0:(m,a,s)=>{s.d(a,{M:()=>t});var c=s(4769),l=s(9862);let t=(()=>{class o{constructor(e){this._HttpClient=e}getAllProducts(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)}getAllcategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getproductdetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}getcategorydetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}getBrandDetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(d){return new(d||o)(c.LFG(l.eN))};static#e=this.\u0275prov=c.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);