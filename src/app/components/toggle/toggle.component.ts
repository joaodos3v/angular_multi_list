import { FormsModule } from '@angular/forms';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SOURCE_PROVIDER } from '../../providers/services/source-service.provider';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent implements OnInit, OnDestroy {
  sourceService = inject(SOURCE_PROVIDER);

  toggleValue = false;

  subs: Subscription[] = [];

  ngOnInit(): void {
    this.getUsePokeAPIValue();
  }

  toggleCheckbox() {
    this.sourceService.toggleUsePokeAPI(this.toggleValue);
  }

  getUsePokeAPIValue() {
    const sub = this.sourceService.usePokeAPI.subscribe((shouldUse) => {
      this.toggleValue = shouldUse;
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
