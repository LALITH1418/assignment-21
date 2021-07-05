import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcsComponent } from './addcs/addcs.component';
import { BusinessAndManagementComponent } from './business-and-management/business-and-management.component';
import { ComputerScienceComponent } from './computer-science/computer-science.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { FakeapiComponent } from './fakeapi/fakeapi.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewcsComponent } from './viewcs/viewcs.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'fakeapi',component:FakeapiComponent},
  {path:'fakeapi/:id',component:UserDetailsComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'cs',component:ComputerScienceComponent,children:[
      {path:'viewcs',component:ViewcsComponent},
      {path:'addcs',component:AddcsComponent},
      {path:'',redirectTo:"/products/cs/viewcs",pathMatch:"full"}
    ]},
    {path:'ds',component:DataScienceComponent},
    {path:'bnm',component:BusinessAndManagementComponent},
    {path:'',redirectTo:'/products/cs',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
