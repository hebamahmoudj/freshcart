import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart } from 'src/app/core/interfaces/cart';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService,private _Renderer2:Renderer2,
      private _Toastr:ToastrService){}
cartdetails:any=null ;
currentcount:any
ngOnInit(): void {
  this.getlogedusercart();
  
}
getlogedusercart(){
  this._CartService.getloggedusercart().subscribe({
    next:(res)=>{

      this.cartdetails=res.data;
      this.currentcount= res.data.pcount;
      console.log(res)
      console.log(res.data._id);
    }
  })
}
removercart(id:string,removebtn:HTMLButtonElement){

  this._Renderer2.setAttribute(removebtn,'disabled','true')
  this._CartService.removeItem(id).subscribe({
    next:(res)=>{this.cartdetails=res.data;
      this._Toastr.error('your cart  item delaited !!')
      
      this._Renderer2.removeAttribute(removebtn,'disabled')
      this._CartService.cartNumber.next(res.numOfCartItems)
    
    
    },
    error:(err)=>{
      this._Renderer2.removeAttribute(removebtn,'disabled')
    }
  
  })

}
changecount(id:string,count:number,countbtn1:HTMLButtonElement,countbtn2:HTMLButtonElement){
  if(count>=1 ){
    this._Renderer2.setAttribute(countbtn1,'disabled','true')
    this._Renderer2.setAttribute(countbtn2,'disabled','true')
    this._CartService.updateproductquentitiy(id,count).subscribe({next:(response)=>{
      this.cartdetails=response.data;
     
      
     
        this._Toastr.success('your cart count updated successfully! ')

      
      this._Renderer2.removeAttribute(countbtn1,'disabled')
      this._Renderer2.removeAttribute(countbtn2,'disabled')

    },
  
    error:(err)=>{

      this._Renderer2.removeAttribute(countbtn1,'disabled')
      this._Renderer2.removeAttribute(countbtn2,'disabled')
    }
    
    
 
  
  
  
  })
  }


}


clearcart(){
  this._CartService.clearcart().subscribe({next:(res)=>{
    if(res.message =='success'){

      this.cartdetails=null;
      this._Toastr.error('your cart is cleared');
      this._CartService.cartNumber.next(0)
    }
  }
  
  }
    
    )
}
}
