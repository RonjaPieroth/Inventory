import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Inventory} from '../inventory';

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrl: './inventory-card.component.css'
})
export class InventoryCardComponent {

  @Input() inventory?: Inventory;
  @Output() deleteEvent = new EventEmitter;

  expired(inventory: Inventory): boolean{
    let warrantyExpiresOn: Date = new Date(inventory.purchaseDate);
    const year: number = warrantyExpiresOn.getFullYear();
    const yearsOfWarranty: number = inventory.yearsOfWarranty;
    warrantyExpiresOn.setFullYear(year + yearsOfWarranty);
    warrantyExpiresOn.setHours(0,0,0,0);
    let today: Date = new Date();
    today.setHours(0,0,0,0)
    return warrantyExpiresOn.getTime() < today.getTime();
  }

  delete(): void{
    this.deleteEvent.emit();
  }

}
