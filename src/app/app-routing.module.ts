import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './prices/prices.component';
import { PricesSearchComponent } from './prices-search/prices-search.component';

const routes: Routes = [

  {
    path: 'prices',
    component: PricesComponent,
    data: { title: 'Todo el listado de precios' }
  },
  {
    path: 'prices/:productId/:brandId/:date',
    component: PricesComponent,
    data: { title: 'Todo el listado de precios' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
