import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { University } from '../models/University.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  universityObj:any;

  constructor(private ar:ActivatedRoute,private fs:FakedataService){}

  ngOnInit():void{
   let id=this.ar.snapshot.params.id;
   this.fs.getUniversityById(id).subscribe(
     obj=>{
      this.universityObj=obj;
     },
     err=>{
       console.log("error in reading",err)
     }
   );
  }

}