import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink,
  NgxPaginationModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent  implements OnInit{
  pageSize:number=0;
  currentpage:number=1;
  total:number=0
  constructor( private _ProductServic:ProductService){}
  Allcategory:Category[]=[]
allsubcategories:any[]=[]
  ngOnInit(): void {
    this._ProductServic.getAllcategories().subscribe({next:(res)=>{

      this.Allcategory=res.data
    }})



    this._ProductServic.getallsubcatwgories().subscribe({next:(res)=>{console.log(res);
    
      this.allsubcategories=res.data;
      this.pageSize=res.metadata.limit;
      this.currentpage=res.metadata.currentPage;
      this.total=res.results
    }})
    
  }


  pageChanged(e:any):void{
    //we call add product and send pagenumber=event to send data for the current number 
    this._ProductServic.getallsubcatwgories(e).subscribe({
      next:(response)=>{ 
        this.allsubcategories=response.data
        console.log(response);
        
        this.pageSize=response.metadata.limit
        this.currentpage=response.metadata.currentPage
        this.total=response.results
      }
    })
  }
}
