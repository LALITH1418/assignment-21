import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[]=[

    {
      courseName:"Probability - The Science of Uncertainity and Data",
      university:"MITx",
      type:"course",
      imageURL:"https://prod-discovery.edx-cdn.org/media/course/image/84251067-b212-4355-a9d3-246d91896b90-41bac59be40f.jpg"
     },
     
     {
      courseName:"Let's Get Personal Working with Personality Type",
      university:"UMD,USMx",
      type:"course",
      imageURL:"https://prod-discovery.edx-cdn.org/media/course/image/c322f751-6fc4-4975-a416-11d73ed9c263-d0d5b0bebbdf.png"
     },
     
     {
      courseName:"CS50's Introduction to Computer Science",
      university:"HarvardX",
      type:"course",
      imageURL:"https://prod-discovery.edx-cdn.org/media/course/image/da1b2400-322b-459b-97b0-0c557f05d017-3b9fb73b5d5d.jpg"
     },
     
     {
      courseName:"CS50's Web Programming with Python and Javascript",
      university:"HarvardX",
      type:"course",
      imageURL:"https://prod-discovery.edx-cdn.org/media/course/image/8f8e5124-1dab-47e6-8fa6-3fbdc0738f0a-762af069070e.jpg"
     },
     
     {
      courseName:"Data Science: Visualization",
      university:"HarvardX",
      type:"course",
      imageURL:"https://prod-discovery.edx-cdn.org/media/course/image/b4072f23-f746-43a1-9819-8e3d8b066f38-76465b3bdbcc.jpg"
     },
     
     {
      courseName:"Python: aprender a programar",
      university:"UPValenciaX",
      type:"course",
      imageURL:"https://prod-discovery.edx-cdn.org/media/course/image/3c9b15c8-345b-4b5e-9b01-b2138ff39556-a136c60181fa.png"
     },
     
     {
      courseName:"Financial Accounting",
      university:"MITx",
      type:"course",
      imageURL:"https://prod-discovery.edx-cdn.org/media/course/image/7c566601-6ddb-4013-aa8e-e0cf29482e35-fb2b80811d13.jpeg"
     },
     
     {
      courseName:"From Poverty to Prosperity: Economics",
      university:"OxfordX",
      type:"course",
      imageURL:"https://prod-discovery.edx-cdn.org/media/course/image/15cac8c7-9173-40c6-9840-fa4b7ab703b3-8f109e3be042.jpg"
     }

  ];
}
