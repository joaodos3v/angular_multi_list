import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SOURCE_PROVIDER } from '../../providers/services/source-service.provider';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
})
export class ControlsComponent implements OnInit, OnDestroy {
  sourceService = inject(SOURCE_PROVIDER);

  title: string = '';
  shouldUsePokeAPI: boolean = false;

  subs: Subscription[] = [];

  ngOnInit(): void {
    this.getUsePokeAPIValue();
  }

  getUsePokeAPIValue() {
    const sub = this.sourceService.usePokeAPI.subscribe((shouldUse) => {
      this.shouldUsePokeAPI = shouldUse;
      this.title = this.shouldUsePokeAPI ? 'PokéAPI' : 'NarutoDB';
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
