import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-allsubcategiesoncategory',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './allsubcategiesoncategory.component.html',
  styleUrls: ['./allsubcategiesoncategory.component.scss']
})
export class AllsubcategiesoncategoryComponent implements OnInit {
  constructor(private _ProductService:ProductService,
    private _ActivatedRoute:ActivatedRoute
    
    
    ){}
  subid:string|null=''
  subcategoriesoncategory:any[]=[];
  ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({next:(param)=>{  this.subid=param.get('id')
  console.log(this.subid);
  
  
}})

this._ProductService.getallsubcategiesoncategory(this.subid).subscribe({next:(res)=>{this.subcategoriesoncategory=res.data
console.log(res);



}})
    
}

}
