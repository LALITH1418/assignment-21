import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CS } from './models/CS.model';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) {}

  getCscourses():Observable<Product[]>{
    return this.hc.get<Product[]>("assets/cscourses.json");
  }

  createNewCourse(courseObj):Observable<any>{
    return this.hc.post("assets/cscourses.json",courseObj);
  }
}
