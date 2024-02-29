import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showpassword :boolean

    // registerForm:FormGroup=new FormGroup(

  //   {name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  //     email: new FormControl('',[Validators.required,Validators.email]),
  //     password:new FormControl('',[Validators.required,Validators.pattern(/^[0-9a-zA-Z_@]{6,}$/)]),
  //     rePassword:new FormControl(''),
  //     phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  // },{validator:[this.confirmpassword]} as FormControlOptions) 

  constructor(private _AuthService:AuthService,
     private _Router: Router,
     private _FormBuilder:FormBuilder){
    this.showpassword =false

  }
  isloading:boolean=false
errorMsg:string=''
registerForm:FormGroup = this._FormBuilder.group({name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],

email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.pattern(/^[0-9a-zA-Z_@]{6,}$/)]],
rePassword:[''],
phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
},{validators:[this.confirmpassword]})

  confirmpassword(group:FormGroup){
    const password=group.get('password');
    const rePassword=group.get('rePassword')
    if(rePassword?.value==''){
      rePassword.setErrors({required:true})
    }
    else if (password?.value !=  rePassword?.value){
      rePassword?.setErrors({mismatch:true})
    }


   

  }

handleform(){
  const userData=this.registerForm.value;
  this.isloading=true;
  if(this.registerForm.valid === true ){

    this._AuthService.register(userData).subscribe({
      next:(response)=>{
        if(response.message=='success'){

         this.isloading=false;
         this._Router.navigate(['/login'])

        }
      },
      error:(err:HttpErrorResponse)=>{
      
        this.errorMsg=err.error.message;
        this.isloading=false
        }
    })
  }
}
showHidePassword(e:any){
  this.showpassword=e.target.checked
}
}
