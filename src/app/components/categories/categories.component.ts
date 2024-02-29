import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent  implements OnInit{
  constructor( private _ProductServic:ProductService){}
  Allcategory:Category[]=[]

  ngOnInit(): void {
    this._ProductServic.getAllcategories().subscribe({next:(res)=>{console.log(res);

      this.Allcategory=res.data
    }})
    
  }
}
