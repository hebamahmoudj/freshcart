"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[932],{6666:(L,_,g)=>{g.r(_),g.d(_,{LoginComponent:()=>I});var p=g(6814),i=g(95),d=g(1120),e=g(4769),f=g(9410);function h(o,s){1&o&&(e.TgZ(0,"p",17),e._uU(1,"please fillout this field"),e.qZA())}function v(o,s){1&o&&(e.TgZ(0,"p",17),e._uU(1,"email invalid format "),e.qZA())}function w(o,s){if(1&o&&(e.TgZ(0,"div",15),e.YNc(1,h,2,0,"p",16),e.YNc(2,v,2,0,"p",16),e.qZA()),2&o){const t=e.oxw();let l,n;e.xp6(1),e.Q6J("ngIf",null==(l=t.loginForm.get("email"))?null:l.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=t.loginForm.get("email"))?null:n.getError("email"))}}function Z(o,s){1&o&&(e.TgZ(0,"p",17),e._uU(1,"please fillout this field"),e.qZA())}function T(o,s){1&o&&(e.TgZ(0,"p",17),e._uU(1,"password inncorect min length is 6"),e.qZA())}function A(o,s){if(1&o&&(e.TgZ(0,"div",15),e.YNc(1,Z,2,0,"p",16),e.YNc(2,T,2,0,"p",16),e.qZA()),2&o){const t=e.oxw();let l,n;e.xp6(1),e.Q6J("ngIf",null==(l=t.loginForm.get("password"))?null:l.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=t.loginForm.get("password"))?null:n.getError("pattern"))}}function C(o,s){1&o&&(e.TgZ(0,"span"),e._UZ(1,"i",18),e.qZA())}function F(o,s){if(1&o&&(e.TgZ(0,"p",19),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.errorMsg)}}const c=function(o,s){return{"is-invalid":o," is-valid":s}};let I=(()=>{class o{constructor(t,l,n){this._AuthService=t,this._Router=l,this._Renderer2=n,this.isloading=!1,this.errorMsg="",this.username="",this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[0-9a-zA-Z_@]{6,}$/)])}),this.showPassword=!1}handleform(){const t=this.loginForm.value;this.isloading=!0,!0===this.loginForm.valid&&this._AuthService.login(t).subscribe({next:l=>{"success"==l.message&&(this.isloading=!1,localStorage.setItem("etoken",l.token),this._AuthService.decodeuser(),this._Router.navigate(["/home"]),this._AuthService.userName.next(this._AuthService.userinfo.name))},error:l=>{this.isloading=!1,this.errorMsg=l.error.message}})}showHidePassword(t){this.showPassword=t.target.checked,console.log(t.target.checked)}static#e=this.\u0275fac=function(l){return new(l||o)(e.Y36(f.e),e.Y36(d.F0),e.Y36(e.Qsj))};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:23,vars:15,consts:[[1,"w-75","bg-main-light","shadow","rounded","p-4","m-3","m-auto","mb-sm-5"],[1,"my-5"],[3,"formGroup","ngSubmit"],[1,"form-floating","my-3"],["type","email","id","email","placeholder","email...","formControlName","email",1,"form-control",3,"ngClass"],["for","email"],["class","alert alert-danger p-1 small m-auto w-50",4,"ngIf"],[1,"d-flex","justify-content-end"],["type","checkbox",3,"change"],["id","password","placeholder","password...","formControlName","password",1,"form-control",3,"type","ngClass"],["for","password"],[1,"main-btn","d-block","ms-auto","p-2",3,"disabled"],[4,"ngIf"],["routerLink","/forget","routerLinkActive","router-link-active",1,"text-underline-none"],["class","alert alert-danger mx-auto p-1 mb-0",4,"ngIf"],[1,"alert","alert-danger","p-1","small","m-auto","w-50"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"],[1,"alert","alert-danger","mx-auto","p-1","mb-0"]],template:function(l,n){if(1&l&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Login Now:"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return n.handleform()}),e.TgZ(4,"div",3),e._UZ(5,"input",4),e.TgZ(6,"label",5),e._uU(7,"email:"),e.qZA()(),e.YNc(8,w,3,2,"div",6),e.TgZ(9,"div",7)(10,"input",8),e.NdJ("change",function(m){return n.showHidePassword(m)}),e.qZA(),e._uU(11,"show "),e.qZA(),e.TgZ(12,"div",3),e._UZ(13,"input",9),e.TgZ(14,"label",10),e._uU(15,"password:"),e.qZA()(),e.YNc(16,A,3,2,"div",6),e.TgZ(17,"button",11),e._uU(18,"login"),e.YNc(19,C,2,0,"span",12),e.qZA(),e.TgZ(20,"a",13),e._uU(21,"forgetpassword?"),e.qZA()(),e.YNc(22,F,2,1,"p",14),e.qZA()),2&l){let r,m,a,u;e.xp6(3),e.Q6J("formGroup",n.loginForm),e.xp6(2),e.Q6J("ngClass",e.WLB(9,c,(null==(r=n.loginForm.get("email"))?null:r.dirty)&&(null==(r=n.loginForm.get("email"))?null:r.invalid),(null==(r=n.loginForm.get("email"))?null:r.valid)&&(null==(r=n.loginForm.get("email"))?null:r.dirty))),e.xp6(3),e.Q6J("ngIf",(null==(m=n.loginForm.get("email"))?null:m.errors)&&(null==(m=n.loginForm.get("email"))?null:m.touched)),e.xp6(5),e.Q6J("type",n.showPassword?"text":"password")("ngClass",e.WLB(12,c,(null==(a=n.loginForm.get("password"))?null:a.dirty)&&(null==(a=n.loginForm.get("password"))?null:a.invalid),(null==(a=n.loginForm.get("password"))?null:a.valid)&&(null==(a=n.loginForm.get("password"))?null:a.dirty))),e.xp6(3),e.Q6J("ngIf",(null==(u=n.loginForm.get("password"))?null:u.errors)&&(null==(u=n.loginForm.get("password"))?null:u.touched)),e.xp6(1),e.Q6J("disabled",n.loginForm.invalid),e.xp6(2),e.Q6J("ngIf",n.isloading),e.xp6(3),e.Q6J("ngIf",n.errorMsg)}},dependencies:[p.ez,p.mk,p.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,d.rH]})}return o})()}}]);