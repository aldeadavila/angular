import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PricesModule } from "./prices/prices.module";
import { FormsModule } from '@angular/forms';
import { PricesSearchComponent } from './prices-search/prices-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PricesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PricesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
