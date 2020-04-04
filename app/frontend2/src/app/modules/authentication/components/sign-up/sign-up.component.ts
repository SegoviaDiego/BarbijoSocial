import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output('onSubmit')
  onSubmitEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(): void {
    this.onSubmitEventEmitter.emit({
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    });
  }
}
