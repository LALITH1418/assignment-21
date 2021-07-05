import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewcs',
  templateUrl: './viewcs.component.html',
  styleUrls: ['./viewcs.component.css']
})
export class ViewcsComponent implements OnInit {

  cscourses:Product[]=[];
 constructor(private dsObj:DataService){}

 ngOnInit(){
  this.dsObj.getCscourses().subscribe(
    data=>{
      this.cscourses=data;
    },
    err=>{
      console.log('error');
    }
    )

 }
}
