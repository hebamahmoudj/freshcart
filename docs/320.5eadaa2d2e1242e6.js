"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[320],{7320:(g,i,s)=>{s.r(i),s.d(i,{CategorydetailsComponent:()=>m});var c=s(6814),t=s(4769),n=s(1120),d=s(0);function o(e,l){if(1&e&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"div"),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div")(7,"h2"),t._uU(8),t.qZA()()()()()),2&e){const r=t.oxw();t.xp6(4),t.Q6J("src",r.categorydetails.image,t.LSH)("alt",r.categorydetails.name),t.xp6(4),t.Oqu(r.categorydetails.name)}}let m=(()=>{class e{constructor(r,a){this._ActivatedRoute=r,this._ProductService=a,this.categoryid="",this.categorydetails={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:r=>{this.categoryid=r.get("id"),console.log(this.categoryid)}}),this._ProductService.getcategorydetails(this.categoryid).subscribe({next:r=>{this.categorydetails=r.data}})}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(n.gz),t.Y36(d.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-categorydetails"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","shadow rounded p-3 w-75 mx-auto bg-main-light mt-3",4,"ngIf"],[1,"shadow","rounded","p-3","w-75","mx-auto","bg-main-light","mt-3"],[1,"row","justify-content-center","align-items-center"],[1,"col-md-4"],["height","400px",1,"w-100","rounded",3,"src","alt"],[1,"col-md-8"]],template:function(a,u){1&a&&t.YNc(0,o,9,3,"section",0),2&a&&t.Q6J("ngIf",u.categorydetails._id)},dependencies:[c.ez,c.O5]})}return e})()},0:(g,i,s)=>{s.d(i,{M:()=>d});var c=s(5619),t=s(4769),n=s(9862);let d=(()=>{class o{constructor(e){this._HttpClient=e,this.scrolly=new c.X(!1)}getAllProducts(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)}getAllcategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getproductdetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}getcategorydetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}getBrandDetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(l){return new(l||o)(t.LFG(n.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);