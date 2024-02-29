import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  cartId:string|null=''
  constructor(private _ActivatedRoute:ActivatedRoute,
    private _CartService:CartService){}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({next:(params)=>{
this.cartId=params.get('id')
  }})
}

checkoutForm:FormGroup=new FormGroup({
  details:new FormControl(''),
  phone:new FormControl(''),
  city:new FormControl('')
  
})

handleForm():void{
this._CartService.checkout(this.cartId,this.checkoutForm.value).subscribe({next:(response)=>{
if(response.status=='success'){
  window.open(response.session.url)
}


// this._CartService.cartNumber.next(0)
}

})
  // this._CartService.cartNumber.next(0)
}
}
