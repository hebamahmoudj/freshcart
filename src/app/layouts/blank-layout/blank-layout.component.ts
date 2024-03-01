import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { transition } from '@angular/animations';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,NavBlankComponent,RouterOutlet,FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent  implements OnInit{
 
  constructor(private _Renderer2:Renderer2,
    private _ProductService:ProductService
    
    ){}

    scrolltoy!:boolean
 ngOnInit(): void {
  this._ProductService.scrolly.subscribe({next:(res)=>{this.scrolltoy=res}})

   
 }
  
  
  goup():void{
    window.scrollTo(0,0)


  
    
  }

}
