import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent  implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute
     ,private _ProductService:ProductService,
     
     private _CartService:CartService,
     private _Renderer2:Renderer2,
     private  toastr:ToastrService
     ){
  }

 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000, // Adjust the autoplay interval (in milliseconds)
    autoplayHoverPause: true,
    // autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
  
    nav: false
  };

 
  productId!:string|null;
  productdetails:any=null; //object also true until its empty object so we give it null to check on html section
  ngOnInit(): void {
    // this._ActivatedRoute.snapshot.params['id'] another way to get id 
  this._ActivatedRoute.paramMap.subscribe({next:(params)=>{
    this.productId=params.get('id');
    console.log(this.productId);
    this.getdetails(this.productId);
    

  }})
  }

  getdetails(id:string|null){
    this._ProductService.getproductdetails(id).subscribe({
      next:(response)=>{this.productdetails= response.data}}
    )
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
