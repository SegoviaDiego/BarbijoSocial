import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../../modules/authentication/services/authentication.service';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header.layout.component.html',
  styleUrls: ['./header.layout.component.scss'],
  animations: [
    trigger('popInOut', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition('* => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ]
})
export class HeaderLayoutComponent {
  @Output()
  public toggleSidebarEvent = new EventEmitter<void>();

  @Output()
  public toggleAvatarDropdownEvent = new EventEmitter<void>();

  public dropdownIsOpen: boolean;

  public user: any;

  constructor(private authenticationService: AuthenticationService) {
    this.dropdownIsOpen = false;
    this.user = this.authenticationService.getUser();
  }

  public toggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }

  public toggleAvatarDropdown(value?: boolean): void {
    if (value !== undefined) {
      this.dropdownIsOpen = value;
    } else {
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
    this.toggleAvatarDropdownEvent.emit();
  }

  public onSignOut(): void {
    this.authenticationService.logout();
  }
}
