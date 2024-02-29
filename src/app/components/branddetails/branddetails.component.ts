import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-branddetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.scss']
})
export class BranddetailsComponent implements OnInit{
brandid:string|null=''
brandDetails:any
  constructor(private _ProductService:ProductService,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({next:(params)=>{this.brandid=params.get('id')}})

    this._ProductService.getBrandDetails(this.brandid).subscribe({next:(res)=>{this.brandDetails=res.data;
    }})
    
  }

}
