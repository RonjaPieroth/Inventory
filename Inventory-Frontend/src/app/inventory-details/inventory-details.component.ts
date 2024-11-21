import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InventoryService} from '../inventory.service';
import {Inventory} from '../inventory';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrl: './inventory-details.component.css'
})
export class InventoryDetailsComponent {
  inventory?: Inventory;
  modify: boolean = false;
  inventoryForm?: FormGroup;
  id: string | null

  constructor(private route: ActivatedRoute, private inventoryService: InventoryService, private fb: FormBuilder) {
    this.id = route.snapshot.paramMap.get("id");
    this.loadInventory();

  }

  loadInventory(): void {
    if (this.id) {
      this.inventoryService.getInventoryByID(parseInt(this.id)).subscribe(data => {
          this.inventory = data;
          this.inventoryForm = this.fb.group({
            id: [this.inventory?.id],
            name: [this.inventory?.name, Validators.required],
            purchaseDate: [this.inventory?.purchaseDate, Validators.required],
            price: [this.inventory?.price, Validators.required],
            yearsOfWarranty: [this.inventory?.yearsOfWarranty, Validators.required]
          });
        }
      );
    }

  }

  modifyInventory(): void {
    if (this.inventoryForm) {
      this.inventoryService.modifyInventory(this.inventoryForm.value).subscribe(data => {
        console.log(data);
        this.loadInventory();
      });
    }
    this.modify = false;
  }
}
