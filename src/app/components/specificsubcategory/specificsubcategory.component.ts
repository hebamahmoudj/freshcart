import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-specificsubcategory',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './specificsubcategory.component.html',
  styleUrls: ['./specificsubcategory.component.scss']
})
export class SpecificsubcategoryComponent implements OnInit {
  constructor(private _ProductService:ProductService,
    private _ActivatedRoute:ActivatedRoute
    
    
    ){}
  subid:string|null=''
  specificsubcategory:any=null;
  ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({next:(param)=>{  this.subid=param.get('id')
  console.log(this.subid);
  
  
  
  
  }})

  this._ProductService.getspecificsubcategory(this.subid).subscribe({next:(res)=>{this.specificsubcategory=res.data}})
    
  }

}
