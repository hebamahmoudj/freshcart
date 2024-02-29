import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {
  categoryid:string|null=''
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService){


  }
  categorydetails:Category={} as Category
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({next:(params)=>{ this.categoryid=params.get('id')

console.log(this.categoryid);


}})

this._ProductService.getcategorydetails(this.categoryid).subscribe({next:(res)=>{this.categorydetails=res.data;
}})


}



}
