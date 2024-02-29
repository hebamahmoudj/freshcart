import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { Category } from 'src/app/core/interfaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor(
  private _ProductService:ProductService,
  private _Router:Router,
  private _CartService:CartService,
  private toastr: ToastrService,
  private _Renderer2:Renderer2,
  private _WishlistService:WishlistService,
  private _AuthService:AuthService
  ){}
searchword:string='';

  customOptions: OwlOptions = {


    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000, // Adjust the autoplay interval (in milliseconds)
    autoplayHoverPause: true,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items:5
      }
    },
    nav: false
  }
mainsliderOptions: OwlOptions = {

    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 2000, // Adjust the autoplay interval (in milliseconds)
    autoplayHoverPause: true,
    autoplaySpeed:1000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav:false
  }
  products:Product[]=[];
  allwishlistid:string[]=[]
  
  categories:Category[]=[]
  ngOnInit(): void {
    console.log('home');
    
    let x = this._AuthService.decodeuser();
    console.log(x)
  

    this._ProductService.getAllProducts().subscribe({


      next:(response)=>{ 
        this.products=response.data
      }


      
      
    })

    this._WishlistService.getloggeduserwishlis().subscribe({next:(res)=>{
      console.log(res.count);
      
     const newwish=res.data.map((item:any)=>item._id)
     this.allwishlistid=newwish
    }})
    this._ProductService.getAllcategories().subscribe({next:(response)=>{this.categories=response.data }})
    
  }

  ////to add product to  user cart
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
  addwishlist(id:string|undefined):void{

this._WishlistService.addproductTowishlist(id).subscribe({next:(res)=>{this.allwishlistid=res.data;
console.log(res.data.length);

  this._WishlistService.wishlistnums.next(res.data.length)




this.toastr.success(res.message)}})
  }

  removefromwishlist(id:string|undefined){

    this._WishlistService.removefromwishlist(id).subscribe({next:(res)=>{this.allwishlistid=res.data
      this.toastr.error(res.message)
      this._WishlistService.wishlistnums.next(res.data.length)
      
    }})
  }



}
