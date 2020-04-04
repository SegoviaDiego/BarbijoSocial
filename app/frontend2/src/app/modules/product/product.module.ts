import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockPage } from './pages/stock/stock.page';
import { ProductRoutingModule } from './product.routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AddProductPage } from './pages/add-product/add-product.page';

@NgModule({
  declarations: [
    StockPage,
    ProductListComponent,
    ProductFormComponent,
    AddProductPage
  ],
  imports: [CommonModule, ProductRoutingModule],
  providers: []
})
export class ProductModule {}
