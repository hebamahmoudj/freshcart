import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { Product } from 'src/app/core/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,CuttextPipe,RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit  {
  allwishlistid:string[]=[]
  products:Product[]=[]
  constructor(private _WishlistService:WishlistService,
    private toastr:ToastrService,
    private _CartService:CartService,
    private _Renderer2:Renderer2
    
    ){}
  ngOnInit(): void {
    this._WishlistService.getloggeduserwishlis().subscribe({next:(res)=>{this.products=res.data}})
    
  }
  addwishlist(id:string|undefined):void{

    this._WishlistService.addproductTowishlist(id).subscribe({next:(res)=>{this.allwishlistid=res.data
      console.log( 'wisdsh'+res);
      
    
    
    
    this.toastr.success(res.message)}})
      }

   removefromwishlist(id:any){
        this._WishlistService.removefromwishlist(id).subscribe({next:(res)=>{
          // this.allwishlistid=res.data;

          // this.toastr.error(res.message)
          this._WishlistService.getloggeduserwishlis().subscribe({next:(res)=>{this.products=res.data;
          
          
            this._WishlistService.wishlistnums.next(res.data.length)
          }})
        
        }})
      }
      addproducttocart(pid:any,btn:HTMLButtonElement){
        // make add to cart button disabled until to call api and get response
           this._Renderer2.setAttribute(btn,'disabled','true');
           this._CartService.addtocart(pid).subscribe({next:(response)=>{
          //show alert to user that it product add to his cart
            this.toastr.success(response.message);
           //make add to cart  button enable after response
           this._Renderer2.removeAttribute(btn,'disabled')
           //// to change navbar cart number 
           this._CartService.cartNumber.next(response.numOfCartItems)
        
        },
        error:(err)=>{
          //make add  to cart enabled after in case of error
          this._Renderer2.removeAttribute(btn,'disabled')
        }
      
      
      
      })
    
    
      }

 
}
