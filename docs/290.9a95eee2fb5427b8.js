"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[290],{5290:(b,m,o)=>{o.r(m),o.d(m,{CartComponent:()=>A});var d=o(6814),p=o(1120),t=o(4769),h=o(6286),_=o(2425);function x(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13),t._UZ(2,"img",14),t.qZA(),t.TgZ(3,"div",15)(4,"div")(5,"h3",16),t._uU(6),t.qZA(),t.TgZ(7,"p",5),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",17,18),t.NdJ("click",function(){const n=t.CHM(e).$implicit,u=t.MAs(11),l=t.oxw(2);return t.KtG(l.removercart(n.product._id,u))}),t._UZ(12,"i",19),t.qZA()(),t.TgZ(13,"div")(14,"button",20,21),t.NdJ("click",function(){const n=t.CHM(e).$implicit,u=t.MAs(15),l=t.MAs(20),C=t.oxw(2);return t.KtG(C.changecount(n.product._id,n.count-1,u,l))}),t._uU(16,"-"),t.qZA(),t.TgZ(17,"span",22),t._uU(18),t.qZA(),t.TgZ(19,"button",20,23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,u=t.MAs(15),l=t.MAs(20),C=t.oxw(2);return t.KtG(C.changecount(n.product._id,n.count+1,u,l))}),t._uU(21,"+"),t.qZA()()()()}if(2&s){const e=g.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.Oqu(t.xi3(9,5,e.price,"EGP")),t.xp6(10),t.Oqu(e.count)}}const c=function(s){return["/payment",s]},a=function(s){return["/cashpayment",s]};function v(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1"),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.clearcart())}),t._uU(5,"clear cart"),t.qZA()(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,x,22,8,"div",6),t.TgZ(10,"div",7)(11,"button",8),t._uU(12,"online payment "),t._UZ(13,"img",9),t.qZA(),t.TgZ(14,"button",10),t._uU(15,"cash payment "),t._UZ(16,"img",11),t.qZA()()()}if(2&s){const e=t.oxw();t.xp6(7),t.hij("total price: ",t.xi3(8,4,e.cartdetails.totalCartPrice,"EGP")," "),t.xp6(2),t.Q6J("ngForOf",e.cartdetails.products),t.xp6(2),t.Q6J("routerLink",t.VKq(7,c,e.cartdetails._id)),t.xp6(3),t.Q6J("routerLink",t.VKq(9,a,e.cartdetails._id))}}function f(s,g){1&s&&(t.TgZ(0,"h2",24),t._uU(1,"Your Cart is Empty Now ............."),t.qZA())}let A=(()=>{class s{constructor(e,r,i){this._CartService=e,this._Renderer2=r,this._Toastr=i,this.cartdetails=null}ngOnInit(){this.getlogedusercart()}getlogedusercart(){this._CartService.getloggedusercart().subscribe({next:e=>{this.cartdetails=e.data,this.currentcount=e.data.pcount,console.log(e),console.log(e.data._id)}})}removercart(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeItem(e).subscribe({next:i=>{this.cartdetails=i.data,this._Toastr.error("your cart  item delaited !!"),this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(r,"disabled")}})}changecount(e,r,i,n){r>=1&&(this._Renderer2.setAttribute(i,"disabled","true"),this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.updateproductquentitiy(e,r).subscribe({next:u=>{this.cartdetails=u.data,this._Toastr.success("your cart count updated successfully! "),this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(n,"disabled")},error:u=>{this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(n,"disabled")}}))}clearcart(){this._CartService.clearcart().subscribe({next:e=>{"success"==e.message&&(this.cartdetails=null,this._Toastr.error("your cart is cleared"),this._CartService.cartNumber.next(0))}})}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(h.N),t.Y36(t.Qsj),t.Y36(_._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","shadow bg-main-light p-4 rounded my-5 w-75  mx-auto mt-sm-5 my-xss-5  mt-xs-5 my-auto",4,"ngIf","ngIfElse"],["msg",""],[1,"shadow","bg-main-light","p-4","rounded","my-5","w-75","mx-auto","mt-sm-5","my-xss-5","mt-xs-5","my-auto"],[1,"d-flex","align-items-center","justify-content-between"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-main","small"],["class","row border-bottom my-3",4,"ngFor","ngForOf"],[1,"d-flex","gap-3","g-1","justify-content-between","ms-auto","d-md-flex","d-sm-block","d-xs-block"],[1,"main-btn","mt-3","p-2","ms-auto","mx-1",3,"routerLink"],["src","./assets/images/visa.avif","height","25px","width","25px"],[1,"main-btn","mt-3","p-2","px-2","me-auto",3,"routerLink"],["src","./assets/images/cash1.jpg","height","25px","width","25px"],[1,"row","border-bottom","my-3"],[1,"col-md-1","col-sm-4","col-xs-4"],[1,"w-100",3,"src","alt"],[1,"col-md-11","col-sm-8","d-flex","align-items-center","justify-content-between"],[1,"h6"],[1,"text-main","btn","mb-0","p-0",3,"click"],["removebtn",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["countbtn1",""],[1,"mx-2"],["countbtn2",""],[1,"text-main","text-center"]],template:function(r,i){if(1&r&&(t.YNc(0,v,17,11,"section",0),t.YNc(1,f,2,0,"ng-template",null,1,t.W1O)),2&r){const n=t.MAs(2);t.Q6J("ngIf",null!=i.cartdetails)("ngIfElse",n)}},dependencies:[d.ez,d.sg,d.O5,d.H9,p.rH]})}return s})()},6286:(b,m,o)=>{o.d(m,{N:()=>h});var d=o(5619),p=o(4769),t=o(9862);let h=(()=>{class _{constructor(c){this._HttpClient=c,this.cartNumber=new d.X(0),this.baseurl="https://ecommerce.routemisr.com/api/v1/"}addtocart(c){return this._HttpClient.post(this.baseurl+"cart",{productId:c})}getloggedusercart(){return this._HttpClient.get(this.baseurl+"cart")}updateproductquentitiy(c,a){return this._HttpClient.put(this.baseurl+`cart/${c}`,{count:a})}removeItem(c){return this._HttpClient.delete(this.baseurl+`cart/${c}`)}clearcart(){return this._HttpClient.delete(this.baseurl+"cart")}checkout(c,a){return this._HttpClient.post(` https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${c}?url=https://hebamahmoudj.github.io/freshcart/#/allorders`,{shippingAddress:a})}checkoutcash(c,a){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${c}`,{shippingAddress:a})}static#t=this.\u0275fac=function(a){return new(a||_)(p.LFG(t.eN))};static#e=this.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);