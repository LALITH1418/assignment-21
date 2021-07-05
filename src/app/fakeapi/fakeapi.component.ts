import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { University } from '../models/University.model';

@Component({
  selector: 'app-fakeapi',
  templateUrl: './fakeapi.component.html',
  styleUrls: ['./fakeapi.component.css']
})
export class FakeapiComponent implements OnInit,OnDestroy{

  mySubscription:Subscription;
  universities:University[]=[];
  constructor(private fsObj:FakedataService,private router:Router){}

  ngOnInit():void{
    this.mySubscription=this.fsObj.getUniversity().subscribe(
      unData=>{
        this.universities=unData;
        console.log(this.universities)
      },
      err=>{
        console.log("error in reading",err)
      }
    );
  }

  onSelectId(id: string){
    this.router.navigateByUrl('fakeapi/'+id);
  }

  ngOnDestroy():void{
    this.mySubscription.unsubscribe();
  }
}
