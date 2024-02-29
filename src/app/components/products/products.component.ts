import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe,NgxPaginationModule,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  pageSize:number=0
  currentpage=1;
  total:number=0
  constructor(
    private _ProductService:ProductService,
    private _CartService:CartService,
    private _Renderer2:Renderer2,
    private toastr:ToastrService
    
    
    ){}
    searchword:string=''
  products:Product[]=[];
  
 
  ngOnInit(): void {
    this._ProductService.getAllProducts().subscribe({
      next:(response)=>{ 
        this.products=response.data
        console.log(response);
        
        this.pageSize=response.metadata.limit
        this.currentpage=response.metadata.currentPage
        this.total=response.results
      }
    })
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
pageChanged(event:any){
  //we call add product and send pagenumber=event to send data for the current number 
  this._ProductService.getAllProducts(event).subscribe({
    next:(response)=>{ 
      this.products=response.data
      console.log(response);
      
      this.pageSize=response.metadata.limit
      this.currentpage=response.metadata.currentPage
      this.total=response.results
    }
  })
}
}
