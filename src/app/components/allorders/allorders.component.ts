import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from 'src/app/core/services/orders.service';
import { CartItem} from 'src/app/core/interfaces/order';
import { AuthService } from 'src/app/core/services/auth.service';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule,CuttextPipe],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})

export class AllordersComponent  implements OnInit{
  // allorders:any
allorders:any
userdata:any
username:any
useraddress:any
totalprice:any
usercity:any;
userphone:any
constructor(private _OrdersService:OrdersService,private _AuthService:AuthService){}
allordersproduct:any;

ngOnInit(): void {

 console.log(this._AuthService.decodeuser());
 
console.log(this._AuthService.userid);


  this._OrdersService.getAllorders(this._AuthService.userid).subscribe({next:(res)=>{
this.username=res[0].user.name;
this.useraddress=res[0].shippingAddress.details

this.usercity=res[0].shippingAddress.city
this.userphone=res[0].shippingAddress.phone
    
  

  for(let i =0 ;i<res.length;i++){
this.userdata=res[0]
  this.allorders=res[i].cartItems;


  
  }
  console.log(this.allorders)
 
 
  
  
   
  }})
}
}
