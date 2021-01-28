import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent} from './../prices/prices.component'

import { AppRoutingModule } from './../app-routing.module';
import { AppComponent } from './../app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PricesComponent],
  imports: [
    CommonModule
  ],
  exports: [PricesComponent]
})
export class PricesModule { }
