"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[937],{937:(u,i,o)=>{o.r(i),o.d(i,{CategoriesComponent:()=>m});var n=o(6814),l=o(1120),t=o(4769),s=o(0);const g=function(c){return["/categorydetails",c]};function e(c,p){if(1&c&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"p",6),t._uU(4),t.qZA()()()),2&c){const r=p.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,g,r._id)),t.xp6(1),t.Q6J("src",r.image,t.LSH)("alt",r.name),t.xp6(2),t.Oqu(r.name)}}let m=(()=>{class c{constructor(r){this._ProductServic=r,this.Allcategory=[]}ngOnInit(){this._ProductServic.getAllcategories().subscribe({next:r=>{console.log(r),this.Allcategory=r.data}})}static#t=this.\u0275fac=function(a){return new(a||c)(t.Y36(s.M))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-5","p-5"],[1,"row","justify-content-center","g-4"],["class","col-sm-6 col-md-4 col-lg-3 ",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],["role","button",1,"rounded","border-success","border","p-4",3,"routerLink"],["height","350px",1,"w-100",3,"src","alt"],[1,"h5","mt-3","text-main","text-center"]],template:function(a,_){1&a&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,e,5,6,"div",2),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("ngForOf",_.Allcategory))},dependencies:[n.ez,n.sg,l.rH]})}return c})()},0:(u,i,o)=>{o.d(i,{M:()=>t});var n=o(4769),l=o(9862);let t=(()=>{class s{constructor(e){this._HttpClient=e}getAllProducts(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)}getAllcategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getproductdetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}getcategorydetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}getBrandDetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(m){return new(m||s)(n.LFG(l.eN))};static#e=this.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);