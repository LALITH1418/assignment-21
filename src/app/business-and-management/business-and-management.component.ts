import { Component, OnInit } from '@angular/core';
import { Data3Service } from '../data3.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-business-and-management',
  templateUrl: './business-and-management.component.html',
  styleUrls: ['./business-and-management.component.css']
})
export class BusinessAndManagementComponent implements OnInit {

  bnmcourses:Product[]=[];
  constructor(private dsObj:Data3Service){}

  ngOnInit(){
    this.dsObj.getBnmcourses().subscribe(
      data=>{
        this.bnmcourses=data;
      },
      err=>{
        console.log('error');
      }
      )
  }
}
