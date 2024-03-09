import { Component, OnInit, inject } from '@angular/core';
import { Item } from '../../domain/models/item.model';
import { CardComponent } from '../card/card.component';
import { LIST_PROVIDER } from '../../providers/services/list-service.provider';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  listService = inject(LIST_PROVIDER);

  items: Item[] = [];

  ngOnInit(): void {
    this.getInitialItems();
  }

  async getInitialItems() {
    this.items = await this.listService.getItems();
  }
}
