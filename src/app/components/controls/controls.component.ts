import { Component } from '@angular/core';
import { FilterListComponent } from '../filter-list/filter-list.component';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [FilterListComponent],
  templateUrl: './controls.component.html',
})
export class ControlsComponent {}
