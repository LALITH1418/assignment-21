import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CS } from '../models/CS.model';

@Component({
  selector: 'app-addcs',
  templateUrl: './addcs.component.html',
  styleUrls: ['./addcs.component.css']
})
export class AddcsComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  courseModel=new CS('','','','');

  onSubmitNewCourse(){
    this.dsObj.createNewCourse(this.courseModel).subscribe(
      res=>{
        this.router.navigateByUrl("products/cs")
      },
      err=>{
        console.log("error in creating new course",err)
      }
    )
  }
}
