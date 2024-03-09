import { Component, OnInit, inject } from '@angular/core';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { SOURCE_PROVIDER } from '../../providers/services/source-service.provider';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [FilterListComponent],
  templateUrl: './controls.component.html',
})
export class ControlsComponent implements OnInit {
  sourceService = inject(SOURCE_PROVIDER);

  title: string = '';
  shouldUsePokeAPI: boolean = false;

  ngOnInit(): void {
    this.getUsePokeAPIValue();
  }

  getUsePokeAPIValue() {
    this.sourceService.usePokeAPI.subscribe((shouldUse) => {
      this.shouldUsePokeAPI = shouldUse;
      this.title = this.shouldUsePokeAPI ? 'PokéAPI' : 'NarutoDB';
    });
  }
}
