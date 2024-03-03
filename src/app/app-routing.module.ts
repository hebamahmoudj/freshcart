import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';

const routes: Routes = [

 //blank layout


  {path:'', canActivate:[authGuard],loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent)

,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:'HOME'},

{path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:'CART'},
{path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:'products'},
{path:'productdetails/:id',loadComponent:()=>import('./components/productdetails/productdetails.component').then((m)=>m.ProductdetailsComponent),title:'productdetails'},
{path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent),title:'BRANDS'},
{path:'branddetails/:id',loadComponent:()=>import('./components/branddetails/branddetails.component').then((m)=>m.BranddetailsComponent),title:'brandDetails'},
{path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:'CATERGORIES'},
{path:'categorydetails/:id',loadComponent:()=>import('./components/categorydetails/categorydetails.component').then((m)=>m.CategorydetailsComponent),title:'categorydetails'},
{path:'specificsubcategory/:id',loadComponent:()=>import('./components/specificsubcategory/specificsubcategory.component').then((m)=>m.SpecificsubcategoryComponent),title:'specific subcategory'},
{path:'allsubcategiesoncategory/:id',loadComponent:()=>import('./components/allsubcategiesoncategory/allsubcategiesoncategory.component').then((m)=>m.AllsubcategiesoncategoryComponent),title:'subcategoriesoncategory'},
{path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent),title:'payment'},

{path:'cashpayment/:id',loadComponent:()=>import('./components/cashpayment/cashpayment.component').then((m)=>m.CashpaymentComponent)},
{path:'wishlist',loadComponent:()=>import('./components/wishlist/wishlist.component').then((m)=>m.WishlistComponent),title:'wishlist'},
{path:'forgetpassword',loadComponent:()=>import('./components/forgetpassword/forgetpassword.component').then((m)=>m.ForgetpasswordComponent),title:'forgetpassword'},
{path:'allorders',loadComponent:()=>import('./components/allorders/allorders.component').then((m)=>m.AllordersComponent),title:'alloreders'}

]

}
//auth layout
,
{
  path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
  children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    
    {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'LOGIN'},
{path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent)},
{path:'forget',loadComponent:()=>import('./components/forgetpassword/forgetpassword.component').then((m)=>m.ForgetpasswordComponent),title:'forgetpassword'},



]
 //notfound component
},
{path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'page not found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
