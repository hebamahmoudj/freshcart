"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[299],{5299:(u,n,r)=>{r.r(n),r.d(n,{BrandsComponent:()=>e});var a=r(6814),i=r(1120),t=r(4769),m=r(0);const c=function(s){return["/branddetails",s]};function p(s,g){if(1&s&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h1",6),t._uU(4),t.qZA()()()),2&s){const o=g.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,c,o._id)),t.xp6(1),t.Q6J("src",o.image,t.LSH)("alt",o.name),t.xp6(2),t.Oqu(o.name)}}let e=(()=>{class s{constructor(o){this._ProductService=o}ngOnInit(){this._ProductService.getAllBrands().subscribe({next:o=>{console.log(o.data),this.allBrands=o.data}})}static#t=this.\u0275fac=function(l){return new(l||s)(t.Y36(m.M))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"p-5","my-5"],[1,"row","g-4"],["class","col-sm-6  col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"rounded","shadow","border","border-success","p-4",3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"text-main","h4"]],template:function(l,d){1&l&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,p,5,6,"div",2),t.qZA()()),2&l&&(t.xp6(2),t.Q6J("ngForOf",d.allBrands))},dependencies:[a.ez,a.sg,i.rH]})}return s})()},0:(u,n,r)=>{r.d(n,{M:()=>m});var a=r(5619),i=r(4769),t=r(9862);let m=(()=>{class c{constructor(e){this._HttpClient=e,this.scrolly=new a.X(!1)}getAllProducts(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)}getAllcategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getproductdetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}getcategorydetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}getallsubcatwgories(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories?page=${e}`)}getspecificsubcategory(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${e}`)}getallsubcategiesoncategory(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}/subcategories`)}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}getBrandDetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(s){return new(s||c)(i.LFG(t.eN))};static#e=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);