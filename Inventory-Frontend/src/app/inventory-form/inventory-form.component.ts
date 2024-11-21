import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../inventory.service';
import {Inventory} from '../inventory';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrl: './inventory-form.component.css'
})
export class InventoryFormComponent {

  inventoryForm: FormGroup;

  constructor(private inventoryService: InventoryService, private fb: FormBuilder, private router: Router) {
    this.inventoryForm = fb.group({
      name: ["", Validators.required],
      purchaseDate: ["", Validators.required],
      price: ["", Validators.required],
      yearsOfWarranty: ["", Validators.required]
    })
  }

  saveInventory(){
    const inventory: Inventory = this.inventoryForm.value;
    this.inventoryService.addInventory(inventory).subscribe();
    this.router.navigate(["/inventory"])
  }
}
