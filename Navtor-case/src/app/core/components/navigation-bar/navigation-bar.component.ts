import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  activeButtonIndex?: number = undefined;
  navigationButtons = [
    { label: 'Vessel', path: 'vessel' },
    { label: 'Emissions', path: 'emmisions' },
  ];

  constructor(private router: Router) {}

  changeActiveButton(index: number): void {
    console.log(index, this.navigationButtons[index]);
    this.activeButtonIndex = index;
    this.router.navigate([this.navigationButtons[index].path]);
  }

  isActiveTab(index: number): boolean {
    return index === this.activeButtonIndex;
  }
}
