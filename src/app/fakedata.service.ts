import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from './models/University.model';


@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hc:HttpClient) { }

  getUniversity():Observable<University[]>{
    return this.hc.get<University[]>("http://localhost:3000/university");
  }

  getUniversityById(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/university/'+id)
  }

}
