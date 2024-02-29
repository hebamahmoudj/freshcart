import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Brand } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  allBrands:any
  constructor(private _ProductService:ProductService){}
  ngOnInit(): void {
    this._ProductService.getAllBrands().subscribe({next:(res)=>{
      console.log(res.data);
      

      this.allBrands=res.data
      
    }})
  }

}
