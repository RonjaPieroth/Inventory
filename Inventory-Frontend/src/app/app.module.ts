import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import {HttpClientModule} from '@angular/common/http';
import { InventoryCardComponent } from './inventory-card/inventory-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    InventoryDetailsComponent,
    InventoryFormComponent,
    InventoryCardComponent,
    NavbarComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
