import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword :boolean
  constructor(private _AuthService:AuthService, private _Router: Router,
    private _Renderer2:Renderer2){

      this.showPassword = false;
    }
  isloading:boolean=false
errorMsg:string='';
username:string=''
  loginForm:FormGroup=new FormGroup(

    {
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^[0-9a-zA-Z_@]{6,}$/)]),
    })
      





handleform(){
  const userData=this.loginForm.value;

  this.isloading=true;
  if(this.loginForm.valid === true ){


    this._AuthService.login(userData).subscribe({
      next:(response)=>{
        if(response.message=='success'){

         this.isloading=false;
         localStorage.setItem('etoken',response.token);
         this._AuthService.decodeuser();
        
         
         
         this._Router.navigate(['/home'])
         
         this._AuthService.userName.next(this._AuthService.userinfo.name)


        }
      },
      error:(err:HttpErrorResponse)=>{
        this.isloading=false
        this.errorMsg=err.error.message;
        }
    })
  }
}



showHidePassword(e:any) {
  this.showPassword = e.target.checked;
  console.log(e.target.checked)
}
}

