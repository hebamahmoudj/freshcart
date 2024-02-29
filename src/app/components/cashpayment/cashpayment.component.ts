import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cashpayment',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './cashpayment.component.html',
  styleUrls: ['./cashpayment.component.scss']
})
export class CashpaymentComponent implements OnInit{
step1:boolean=true
step2:boolean=false
allorders:any;
constructor(private _ActivatedRoute:ActivatedRoute,
  private _CartService:CartService,
  private _Router:Router
  ){

}
cartId:string|null=''
username:string=""
allordersdetails:any
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({next:(params)=>{this.cartId=params.get('id')}})
    console.log(this.cartId);
    
  }
  checkoutForm:FormGroup=new FormGroup({
  details:new FormControl(''),
  phone:new FormControl(''),
  city:new FormControl('')

}
)




handleForm():void{
  const checkoutform=this.checkoutForm.value
  this._CartService.checkoutcash(this.cartId,checkoutform).subscribe({next:(res)=>{console.log(res);

    this.step1=false;
    this.step2=true;
   
    this.allorders=res.data;
      this.allordersdetails=res.data.cartItems
     
        
      console.log(this.allordersdetails);
      
      this._CartService.cartNumber.next(0)
  

  
  }})
 

}
}
