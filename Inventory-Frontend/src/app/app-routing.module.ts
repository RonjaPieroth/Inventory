import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryListComponent} from './inventory-list/inventory-list.component';
import {InventoryFormComponent} from './inventory-form/inventory-form.component';
import {InventoryDetailsComponent} from './inventory-details/inventory-details.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  {path: "inventory", component: InventoryListComponent},
  {path: "inventory/new", component: InventoryFormComponent},
  {path: "inventory/:id", component: InventoryDetailsComponent},
  {path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
