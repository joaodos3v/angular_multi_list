import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [],
  templateUrl: './filter-list.component.html',
})
export class FilterListComponent {
  sorters: string[] = ['Sort by name - ASC', 'Sort by name - DESC'];
}
