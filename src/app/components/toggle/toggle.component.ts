import { FormsModule } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';
import { SOURCE_PROVIDER } from '../../providers/services/source-service.provider';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent implements OnInit {
  sourceService = inject(SOURCE_PROVIDER);

  toggleValue = false;

  ngOnInit(): void {
    this.getUsePokeAPIValue();
  }

  toggleCheckbox() {
    this.sourceService.toggleUsePokeAPI(this.toggleValue);
  }

  getUsePokeAPIValue() {
    this.sourceService.usePokeAPI.subscribe((shouldUse) => {
      this.toggleValue = shouldUse;
    });
  }
}
