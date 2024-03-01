import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductProduct } from 'src/app/core/interfaces/cart';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router:Router,
    private _CartService:CartService,
    private _WishlistService:WishlistService,
    private _AuthService:AuthService,
    private _ProductService:ProductService,
    
    private _Renderer2:Renderer2){

  }
  @ViewChild('navbarr') navbar!:ElementRef
  @HostListener('window:scroll')
  scolling():void{
if( scrollY> 500){
    this._Renderer2.addClass(this.navbar.nativeElement,'px-5')
    this._Renderer2.addClass(this.navbar.nativeElement,'shadow')
    this._ProductService.scrolly.next(true)
  

  }
  else{
    this._Renderer2.removeClass(this.navbar.nativeElement,'px-5')
    this._Renderer2.removeClass(this.navbar.nativeElement,'shadow')
    this._ProductService.scrolly.next(false)


  }
  }
  cartnum:number=0;
  wishnum=0;
  showuserName:string=''

ngOnInit(): void {
  this._CartService.cartNumber.subscribe({next:(data)=>{
    this.cartnum=data;
  }})

  this._CartService.getloggedusercart().subscribe({next:(res)=>{
    this.cartnum=res.numOfCartItems
  }})
  this._WishlistService.wishlistnums.subscribe({next:(res)=>{this.wishnum=res}})
  this._WishlistService.getloggeduserwishlis().subscribe({next:(res)=>{this.wishnum=res.count}})

  this._AuthService.userName.subscribe({next:(res)=>{
   
  
    
    this.showuserName=res}})
}


  signout(){
  localStorage.removeItem('etoken');

  this._Router.navigate(['/login'])
    
  }
}
