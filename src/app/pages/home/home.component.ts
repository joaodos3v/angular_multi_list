import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ControlsComponent } from '../../components/controls/controls.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ControlsComponent, ListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
