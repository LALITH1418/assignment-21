import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.css']
})
export class DataScienceComponent implements OnInit{

  dscourses:Product[]=[];
  constructor(private dsObj:Data2Service){}

  ngOnInit(){
    this.dsObj.getDscourses().subscribe(
      data=>{
        this.dscourses=data;
      },
      err=>{
        console.log('error');
      }
      )
  
  }

}
