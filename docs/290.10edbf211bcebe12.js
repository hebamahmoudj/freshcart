"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[290],{5290:(C,m,o)=>{o.r(m),o.d(m,{CartComponent:()=>A});var d=o(6814),p=o(1120),t=o(4769),h=o(6286),_=o(2425);function x(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"div",13)(1,"div",14),t._UZ(2,"img",15),t.qZA(),t.TgZ(3,"div",16)(4,"div")(5,"h3",17),t._uU(6),t.qZA(),t.TgZ(7,"p",6),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",18,19),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.MAs(11),l=t.oxw(2);return t.KtG(l.removercart(c.product._id,u))}),t._UZ(12,"i",20),t.qZA()(),t.TgZ(13,"div")(14,"button",21,22),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.MAs(15),l=t.MAs(20),b=t.oxw(2);return t.KtG(b.changecount(c.product._id,c.count-1,u,l))}),t._uU(16,"-"),t.qZA(),t.TgZ(17,"span",23),t._uU(18),t.qZA(),t.TgZ(19,"button",21,24),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.MAs(15),l=t.MAs(20),b=t.oxw(2);return t.KtG(b.changecount(c.product._id,c.count+1,u,l))}),t._uU(21,"+"),t.qZA()()()()}if(2&n){const e=g.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.Oqu(t.xi3(9,5,e.price,"EGP")),t.xp6(10),t.Oqu(e.count)}}const i=function(n){return["/payment",n]},a=function(n){return["/cashpayment",n]};function v(n,g){if(1&n){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"div",4)(3,"h1"),t._uU(4,"Shop Cart"),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.clearcart())}),t._uU(6,"clear cart"),t.qZA()(),t.TgZ(7,"p",6),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.YNc(10,x,22,8,"div",7),t.TgZ(11,"div",8)(12,"button",9),t._uU(13,"online payment "),t._UZ(14,"img",10),t.qZA(),t.TgZ(15,"button",11),t._uU(16,"cash payment "),t._UZ(17,"img",12),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(8),t.hij("total price: ",t.xi3(9,4,e.cartdetails.totalCartPrice,"EGP")," "),t.xp6(2),t.Q6J("ngForOf",e.cartdetails.products),t.xp6(2),t.Q6J("routerLink",t.VKq(7,i,e.cartdetails._id)),t.xp6(3),t.Q6J("routerLink",t.VKq(9,a,e.cartdetails._id))}}function f(n,g){1&n&&(t.TgZ(0,"h2",25),t._uU(1,"Your Cart is Empty Now ............."),t.qZA(),t.TgZ(2,"button",26),t._uU(3,"Back to home "),t.qZA())}let A=(()=>{class n{constructor(e,r,s){this._CartService=e,this._Renderer2=r,this._Toastr=s,this.cartdetails=null}ngOnInit(){this.getlogedusercart()}getlogedusercart(){this._CartService.getloggedusercart().subscribe({next:e=>{this.cartdetails=e.data,this.currentcount=e.data.pcount,console.log(e),console.log(e.data._id)}})}removercart(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeItem(e).subscribe({next:s=>{this.cartdetails=s.data,this._Toastr.error("your cart  item delaited !!"),this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(r,"disabled")}})}changecount(e,r,s,c){r>=1&&(this._Renderer2.setAttribute(s,"disabled","true"),this._Renderer2.setAttribute(c,"disabled","true"),this._CartService.updateproductquentitiy(e,r).subscribe({next:u=>{this.cartdetails=u.data,this._Toastr.success("your cart count updated successfully! "),this._Renderer2.removeAttribute(s,"disabled"),this._Renderer2.removeAttribute(c,"disabled")},error:u=>{this._Renderer2.removeAttribute(s,"disabled"),this._Renderer2.removeAttribute(c,"disabled")}}))}clearcart(){this._CartService.clearcart().subscribe({next:e=>{"success"==e.message&&(this.cartdetails=null,this._Toastr.error("your cart is cleared"),this._CartService.cartNumber.next(0))}})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(h.N),t.Y36(t.Qsj),t.Y36(_._W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","shadow bg-main-light rounded ",4,"ngIf","ngIfElse"],["msg",""],[1,"shadow","bg-main-light","rounded"],[1,"container","p-5"],[1,"d-flex","align-items-center","justify-content-between"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-main","small"],["class","row border-bottom my-3",4,"ngFor","ngForOf"],[1,"paymentbtn","d-flex","gap-2","justify-content-center","ms-auto","d-md-flex","d-sm-block","d-xs-block"],[1,"main-btn","p-2","px-4","m-4","mt-0","flex-shrink-0",3,"routerLink"],["src","./assets/images/visa.avif","height","25px","width","25px"],[1,"main-btn","p-2","m-4","px-4","mt-0","flex-shrink-0",3,"routerLink"],["src","./assets/images/cash1.jpg","height","25px","width","25px"],[1,"row","border-bottom","my-3"],[1,"col-md-1","col-sm-4","col-xs-4"],[1,"w-100",3,"src","alt"],[1,"col-md-11","col-sm-8","d-flex","align-items-center","justify-content-between"],[1,"h6"],[1,"text-main","btn","mb-0","p-0",3,"click"],["removebtn",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["countbtn1",""],[1,"mx-2"],["countbtn2",""],[1,"text-main","text-center"],["routerLink","/home",1,"main-btn","d-block","mx-auto","p-2","mt-4"]],template:function(r,s){if(1&r&&(t.YNc(0,v,18,11,"section",0),t.YNc(1,f,4,0,"ng-template",null,1,t.W1O)),2&r){const c=t.MAs(2);t.Q6J("ngIf",null!=s.cartdetails)("ngIfElse",c)}},dependencies:[d.ez,d.sg,d.O5,d.H9,p.rH],styles:["@media only screen and (max-width: 1200px){section[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:3rem;padding:0}.paymentbtn[_ngcontent-%COMP%]{display:block!important;margin:0}.main-btn[_ngcontent-%COMP%]{margin:0}}"]})}return n})()},6286:(C,m,o)=>{o.d(m,{N:()=>h});var d=o(5619),p=o(4769),t=o(9862);let h=(()=>{class _{constructor(i){this._HttpClient=i,this.cartNumber=new d.X(0),this.baseurl="https://ecommerce.routemisr.com/api/v1/"}addtocart(i){return this._HttpClient.post(this.baseurl+"cart",{productId:i})}getloggedusercart(){return this._HttpClient.get(this.baseurl+"cart")}updateproductquentitiy(i,a){return this._HttpClient.put(this.baseurl+`cart/${i}`,{count:a})}removeItem(i){return this._HttpClient.delete(this.baseurl+`cart/${i}`)}clearcart(){return this._HttpClient.delete(this.baseurl+"cart")}checkout(i,a){return this._HttpClient.post(` https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${i}?url=https://hebamahmoudj.github.io/freshcart/#/`,{shippingAddress:a})}checkoutcash(i,a){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${i}`,{shippingAddress:a})}static#t=this.\u0275fac=function(a){return new(a||_)(p.LFG(t.eN))};static#e=this.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);