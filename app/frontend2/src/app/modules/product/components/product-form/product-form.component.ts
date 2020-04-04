import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseProduct } from '@oxymoron-stock/shared';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form-component',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input()
  public product: BaseProduct;

  @Output()
  public onSubmit = new EventEmitter<BaseProduct>();

  public formGroup: FormGroup;

  constructor() {
    this.formGroup.addControl(
      'name',
      new FormControl(this.product.name, [Validators.required])
    );
  }

  public onFormSubmit() {
    return this.onSubmit.emit(this.formGroup.value);
  }
}
