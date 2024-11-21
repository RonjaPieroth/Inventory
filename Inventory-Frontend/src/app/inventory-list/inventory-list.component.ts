import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Inventory} from '../inventory';
import {InventoryService} from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventories: Inventory[] = [];
  sortedList?: Inventory[];

  constructor(private inventoryService: InventoryService) {
    this.loadInventories();
  }

  loadInventories() {
    this.inventoryService.getInventories().subscribe(data => this.inventories = data);
  }

  deleteInventory(id: number): void {
    this.inventoryService.deleteInventory(id).subscribe(() => this.loadInventories());
  }

  calculateRestWarranty(inventory: Inventory): number {
    let date: Date = new Date(inventory.purchaseDate);
    let warrantyDate: Date = new Date(date.setFullYear(date.getFullYear() + inventory.yearsOfWarranty));
    warrantyDate.setHours(0, 0, 0, 0);
    let today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    return warrantyDate.getTime() - today.getTime();
  }

  sortByWarranty(): void {
    this.sortedList = this.inventories.sort((inventory1, inventory2) => {
      const remainingWarranty1 = this.calculateRestWarranty(inventory1);
      const remainingWarranty2 = this.calculateRestWarranty(inventory2);
      if (remainingWarranty1 > 0 && remainingWarranty2 > 0) {
        return (remainingWarranty1 - remainingWarranty2);
      } else if (remainingWarranty1 > 0 && remainingWarranty2 <= 0) {
        return -1;
      } else if (remainingWarranty1 <= 0 && remainingWarranty2 > 0) {
        return 1;
      } else {
        return 0;
      }
    })
  }

  sortByPrice(): void {
    this.sortedList = this.inventories.sort((inventory1, inventory2) => inventory1.price - inventory2.price);

  }


}
