import { Component } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
