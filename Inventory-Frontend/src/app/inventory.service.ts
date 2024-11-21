import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inventory} from './inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url: string = "http://localhost:8080/inventory"

  constructor(private http: HttpClient) { }

  getInventories(): Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this.url);
  }

  getInventoryByID(id: number): Observable<Inventory>{
    return this.http.get<Inventory>(this.url + "/" + id);
  }

  addInventory(inventory: Inventory): Observable<Inventory>{
    return this.http.post<Inventory>(this.url, inventory);
  }

  modifyInventory(inventory: Inventory): Observable<Inventory>{
    return this.http.put<Inventory>(this.url, inventory);
  }

  deleteInventory(id: number): Observable<void>{
    return this.http.delete<void>(this.url + "/" + id);
  }
}
