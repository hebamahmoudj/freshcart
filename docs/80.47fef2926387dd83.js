"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[80],{5080:(g,d,r)=>{r.r(d),r.d(d,{WishlistComponent:()=>O});var l=r(6814),h=r(460),m=r(1120),t=r(4769),a=r(9196),f=r(2425),o=r(6286);function n(i,u){if(1&i&&t._UZ(0,"i",19),2&i){const s=u.$implicit,e=t.oxw().$implicit;t.ekj("rating-color",e.ratingsAverage>=s)}}const v=function(i){return["/productdetails",i]},x=function(){return[1,2,3,4,5]};function C(i,u){if(1&i){const s=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"i",7),t.NdJ("click",function(){const _=t.CHM(s).$implicit,p=t.oxw(2);return t.KtG(p.removefromwishlist(_._id))}),t.qZA(),t.TgZ(3,"header",8),t._UZ(4,"img",9),t.TgZ(5,"h3",10),t._uU(6),t.ALo(7,"cuttext"),t.qZA(),t.TgZ(8,"h4",11),t._uU(9),t.qZA(),t.TgZ(10,"div",12)(11,"span",13),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"span"),t.YNc(15,n,1,2,"i",14),t.TgZ(16,"span",15),t._uU(17),t.qZA()()()(),t.TgZ(18,"footer",16)(19,"button",17,18),t.NdJ("click",function(){const _=t.CHM(s).$implicit,p=t.MAs(20),T=t.oxw(2);return t.KtG(T.addproducttocart(_._id,p))}),t._uU(21,"+Add to cart"),t.qZA()()()()}if(2&i){const s=u.$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(13,v,s._id)),t.xp6(1),t.Q6J("src",s.imageCover,t.LSH),t.xp6(2),t.Oqu(t.xi3(7,7,s.title,3)),t.xp6(3),t.Oqu(s.category.name),t.xp6(3),t.Oqu(t.xi3(13,10,s.price,"e\xa3")),t.xp6(3),t.Q6J("ngForOf",t.DdM(15,x)),t.xp6(2),t.Oqu(s.ratingsAverage)}}function E(i,u){if(1&i&&(t.TgZ(0,"section",2)(1,"div",3),t.YNc(2,C,22,16,"div",4),t.qZA()()),2&i){const s=t.oxw();t.xp6(2),t.Q6J("ngForOf",s.products)}}function A(i,u){1&i&&(t.TgZ(0,"h2",20),t._uU(1,"Your wishlist is Empty Now ............."),t.qZA(),t.TgZ(2,"button",21),t._uU(3,"Back to home "),t.qZA())}let O=(()=>{class i{constructor(s,e,c,_){this._WishlistService=s,this.toastr=e,this._CartService=c,this._Renderer2=_,this.allwishlistid=[],this.products=[]}ngOnInit(){this._WishlistService.getloggeduserwishlis().subscribe({next:s=>{this.products=s.data}})}addwishlist(s){this._WishlistService.addproductTowishlist(s).subscribe({next:e=>{this.allwishlistid=e.data,console.log("wisdsh"+e),this.toastr.success(e.message)}})}removefromwishlist(s){this._WishlistService.removefromwishlist(s).subscribe({next:e=>{this._WishlistService.getloggeduserwishlis().subscribe({next:c=>{this.products=c.data,this._WishlistService.wishlistnums.next(c.data.length)}})}})}addproducttocart(s,e){this._Renderer2.setAttribute(e,"disabled","true"),this._CartService.addtocart(s).subscribe({next:c=>{this.toastr.success(c.message),this._Renderer2.removeAttribute(e,"disabled"),this._CartService.cartNumber.next(c.numOfCartItems)},error:c=>{this._Renderer2.removeAttribute(e,"disabled")}})}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(a.M),t.Y36(f._W),t.Y36(o.N),t.Y36(t.Qsj))};static#s=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","mb-4 mt-4",4,"ngIf","ngIfElse"],["msg",""],[1,"mb-4","mt-4"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100","py-1"],[1,"fas","fa-heart","heart","text-main",3,"click"],["role","button",3,"routerLink"],["alt","product.title",1,"w-100",3,"src"],[1,"h6"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,""],["class","fas fa-star font-sm",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"mt-1"],[1,"main-btn","w-100","py-2","rounded",3,"click"],["btn",""],[1,"fas","fa-star","font-sm"],[1,"text-main","text-center"],["routerLink","/home",1,"main-btn","d-block","mx-auto","p-2","mt-4"]],template:function(e,c){if(1&e&&(t.YNc(0,E,3,1,"section",0),t.YNc(1,A,4,0,"ng-template",null,1,t.W1O)),2&e){const _=t.MAs(2);t.Q6J("ngIf",c.products.length>0)("ngIfElse",_)}},dependencies:[l.ez,l.sg,l.O5,l.H9,h.r,m.rH]})}return i})()},6286:(g,d,r)=>{r.d(d,{N:()=>t});var l=r(5619),h=r(4769),m=r(9862);let t=(()=>{class a{constructor(o){this._HttpClient=o,this.cartNumber=new l.X(0),this.baseurl="https://ecommerce.routemisr.com/api/v1/"}addtocart(o){return this._HttpClient.post(this.baseurl+"cart",{productId:o})}getloggedusercart(){return this._HttpClient.get(this.baseurl+"cart")}updateproductquentitiy(o,n){return this._HttpClient.put(this.baseurl+`cart/${o}`,{count:n})}removeItem(o){return this._HttpClient.delete(this.baseurl+`cart/${o}`)}clearcart(){return this._HttpClient.delete(this.baseurl+"cart")}checkout(o,n){return this._HttpClient.post(` https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${o}?url=https://hebamahmoudj.github.io/freshcart/#/`,{shippingAddress:n})}checkoutcash(o,n){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${o}`,{shippingAddress:n})}static#t=this.\u0275fac=function(n){return new(n||a)(h.LFG(m.eN))};static#s=this.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);