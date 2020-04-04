import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockPage } from './pages/stock/stock.page';
import { AddProductPage } from './pages/add-product/add-product.page';

const routes: Routes = [
  {
    path: 'stock',
    component: StockPage
  },
  {
    path: 'add',
    component: AddProductPage
  },
  { path: '**', redirectTo: 'stock', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
