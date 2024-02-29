"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[45],{6286:(v,d,a)=>{a.d(d,{N:()=>h});var p=a(5619),l=a(4769),t=a(9862);let h=(()=>{class c{constructor(i){this._HttpClient=i,this.cartNumber=new p.X(0),this.baseurl="https://ecommerce.routemisr.com/api/v1/"}addtocart(i){return this._HttpClient.post(this.baseurl+"cart",{productId:i})}getloggedusercart(){return this._HttpClient.get(this.baseurl+"cart")}updateproductquentitiy(i,s){return this._HttpClient.put(this.baseurl+`cart/${i}`,{count:s})}removeItem(i){return this._HttpClient.delete(this.baseurl+`cart/${i}`)}clearcart(){return this._HttpClient.delete(this.baseurl+"cart")}checkout(i,s){return this._HttpClient.post(` https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${i}?url=https://github.com/hebamahmoudj/freshcart.git`,{shippingAddress:s})}checkoutcash(i,s){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${i}`,{shippingAddress:s})}static#t=this.\u0275fac=function(s){return new(s||c)(l.LFG(t.eN))};static#e=this.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},4045:(v,d,a)=>{a.r(d),a.d(d,{BlankLayoutComponent:()=>f});var p=a(6814),l=a(1120),t=a(4769),h=a(6286),c=a(9196),m=a(9410);const i=["navbarr"];let s=(()=>{class o{constructor(e,n,r,u,b){this._Router=e,this._CartService=n,this._WishlistService=r,this._AuthService=u,this._Renderer2=b,this.cartnum=0,this.wishnum=0,this.showuserName=""}scolling(){scrollY>500?(this._Renderer2.addClass(this.navbar.nativeElement,"px-5"),this._Renderer2.addClass(this.navbar.nativeElement,"shadow")):(this._Renderer2.removeClass(this.navbar.nativeElement,"px-5"),this._Renderer2.removeClass(this.navbar.nativeElement,"shadow"))}ngOnInit(){this._CartService.cartNumber.subscribe({next:e=>{this.cartnum=e}}),this._CartService.getloggedusercart().subscribe({next:e=>{this.cartnum=e.numOfCartItems}}),this._WishlistService.wishlistnums.subscribe({next:e=>{this.wishnum=e}}),this._WishlistService.getloggeduserwishlis().subscribe({next:e=>{this.wishnum=e.count}}),this._AuthService.userName.subscribe({next:e=>{this.showuserName=e}})}signout(){localStorage.removeItem("etoken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(l.F0),t.Y36(h.N),t.Y36(c.M),t.Y36(m.e),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-nav-blank"]],viewQuery:function(n,r){if(1&n&&t.Gf(i,5),2&n){let u;t.iGM(u=t.CRH())&&(r.navbar=u.first)}},hostBindings:function(n,r){1&n&&t.NdJ("scroll",function(){return r.scolling()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:52,vars:3,consts:[[1,"navbar","navbar-expand-md","navbar-light","bg-light","fixed-top"],["navbarr",""],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","fresh cart logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLink","/home","routerLinkActive","active-link","aria-current","page",1,"nav-link","active"],[1,"visually-hidden"],["routerLink","/products","routerLinkActive","active-link",1,"nav-link"],["routerLink","/brands","routerLinkActive","active-link",1,"nav-link"],["routerLink","/categories","routerLinkActive","active-link",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","align-items-center"],[1,"nav-item","me-2"],[1,"text-main"],[1,"nav-item","dropdown"],["id","navbarDropdownMenuLink","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle","me-2"],[1,"fas","fa-user","fa-2x","text-main"],["aria-labelledby","navbarDropdownMenuLink",1,"dropdown-menu"],["role","button ","routerLinkActive","active-link"],["routerLink","/forgetpassword",1,"dropdown-item"],[1,"nav-link","position-relative"],["routerLink","/wishlist",1,"fas","fa-heart","text-danger","fa-3x"],[1,"badge","bg-info","position-absolute","top-0","end-0"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-shopping-cart","text-main","fa-2x"],[1,"nav-item","d-flex","gap-3","me-3"],[1,"fab","fa-instagram"],[1,"fab","fa-facebook"],[1,"fab","fa-tiktok"],[1,"fab","fa-twitter"],[1,"fab","fa-youtube"],[1,"nav-item","d-flex"],["role","button",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t._UZ(5,"button",5),t.TgZ(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),t._uU(10,"home "),t.TgZ(11,"span",10),t._uU(12,"(current)"),t.qZA()()(),t.TgZ(13,"li",8)(14,"a",11),t._uU(15,"products"),t.qZA()(),t.TgZ(16,"li",8)(17,"a",12),t._uU(18,"brands"),t.qZA()(),t.TgZ(19,"li",8)(20,"a",13),t._uU(21,"categories"),t.qZA()()(),t.TgZ(22,"ul",14)(23,"li",15)(24,"span",16),t._uU(25),t.qZA()(),t.TgZ(26,"li",17)(27,"a",18),t._UZ(28,"i",19),t.qZA(),t.TgZ(29,"ul",20)(30,"li",21)(31,"a",22),t._uU(32,"forget password"),t.qZA()()()(),t.TgZ(33,"li",15)(34,"a",23),t._UZ(35,"i",24),t.TgZ(36,"span",25),t._uU(37),t.qZA()()(),t.TgZ(38,"li",15)(39,"a",26),t._UZ(40,"i",27),t.TgZ(41,"span",25),t._uU(42),t.qZA()()(),t.TgZ(43,"li",28),t._UZ(44,"i",29)(45,"i",30)(46,"i",31)(47,"i",32)(48,"i",33),t.qZA(),t.TgZ(49,"li",34)(50,"span",35),t.NdJ("click",function(){return r.signout()}),t._uU(51,"signout"),t.qZA()()()()()()),2&n&&(t.xp6(25),t.Oqu(r.showuserName),t.xp6(12),t.Oqu(r.wishnum),t.xp6(5),t.Oqu(r.cartnum))},dependencies:[p.ez,l.rH,l.Od],styles:["nav[_ngcontent-%COMP%]{transition:.7s padding}"]})}return o})();var g=a(7913);let f=(()=>{class o{goup(){window.scrollTo(0,0)}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container-fluid"],[1,"btn-up",3,"click"],[1,"fas","fa-angle-up"]],template:function(n,r){1&n&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return r.goup()}),t._UZ(5,"i",2),t.qZA())},dependencies:[p.ez,s,l.lC,g.c],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}.btn-up[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;z-index:999;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:10px;background-color:#0aad0a;border:none;color:#fff;font-size:20px}"]})}return o})()}}]);