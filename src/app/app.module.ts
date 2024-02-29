import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import{BrowserAnimationsModule} from'@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyhttpInterceptor } from './core/interceptors/myhttp.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,HttpClientModule,BrowserAnimationsModule, ToastrModule.forRoot(),
    NgxPaginationModule,ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
     
    }),
  ],
  //betnafezo beltrteb
  providers: [{provide:HTTP_INTERCEPTORS,useClass:MyhttpInterceptor,multi:true},{
    provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
