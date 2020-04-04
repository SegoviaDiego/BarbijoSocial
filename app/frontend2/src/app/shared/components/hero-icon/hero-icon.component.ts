import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector:    'hero-icon',
  templateUrl: './hero-icon.component.html',
  styleUrls:   ['./hero-icon.component.scss']
})
export class HeroIconComponent implements OnChanges {
  @Input() icon: string;

  @Input() outline: boolean = true;

  public iconUri: string;

  ngOnChanges() {
    if (this.outline) {
      this.iconUri = `/assets/hero-icons/outline-md/md-${this.icon}.svg`;
    } else {
      this.iconUri = `/assets/hero-icons/solid-sm/sm-${this.icon}.svg`;
    }
  }
}
