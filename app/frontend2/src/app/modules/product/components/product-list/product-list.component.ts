import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input()
  public products: any[];
}
