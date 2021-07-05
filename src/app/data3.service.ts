import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {



  constructor(private hc:HttpClient) {}

  getBnmcourses():Observable<Product[]>{
    return this.hc.get<Product[]>("assets/bnmcourses.json");
  }
}
