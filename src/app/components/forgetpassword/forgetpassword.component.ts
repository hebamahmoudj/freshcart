import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetpasswordService } from 'src/app/core/services/forgetpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  constructor(private _ForgetpasswordService:ForgetpasswordService,
    private _Router:Router
    ){}
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  email:string='';
  msg:string=''
  forgetpassword:FormGroup= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])

  }
  )

  resetCode:FormGroup= new FormGroup({
    resetCode:new FormControl('',[Validators.required])

  }
  )
  resetPassword:FormGroup= new FormGroup({
    newPassword:new FormControl('',[Validators.required,Validators.pattern(/^[0-9a-zA-Z_@]{6,}$/)])

  }
  )



  forgotpassword():void{
let useremail=this.forgetpassword.value;
this.email=useremail.email

    this._ForgetpasswordService.forgotPasswords(useremail).subscribe({next:(response)=>{console.log(response);
      this.msg=response.message;
      this.step1=false;
      this.step2=true
      console.log(response);
      
      
    },
  error:(err)=>{this.msg=err.error.message}})
  }

  resetyourCode():void{

    this._ForgetpasswordService.resetcode(this.resetCode.value).subscribe({next:(response)=>{this.msg=response.status;
      this.step1=false;
      this.step2=false;
      this.step3=true
    },
  error:(err)=>{
    this.msg=err.error.message
  }})
  }

  resetyourPassword(){
let resetpassword=this.resetPassword.value;
resetpassword.email= this.email ;//to create email in reset password object and but the email value e=we have from first form to avoid user to enter it again


    this._ForgetpasswordService.resetpassword(resetpassword).subscribe({next:(response)=>{
     if(response.token){
      localStorage.setItem('etoken',response.token)
      this._Router.navigate(['/home'])

     }
    },
  error:(err)=>{

    this.msg=err.error.message
    
  }})
  }
}
