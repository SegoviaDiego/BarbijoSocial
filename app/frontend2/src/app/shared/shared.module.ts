import { NgModule } from '@angular/core';
import { ClickAwayDirective } from './directives/click-away.directive';
import { HeroIconComponent } from './components/hero-icon/hero-icon.component';

@NgModule({
  declarations: [ClickAwayDirective, HeroIconComponent],
  exports: [ClickAwayDirective, HeroIconComponent]
})
export class SharedModule {}
