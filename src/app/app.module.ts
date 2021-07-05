import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ComputerScienceComponent } from './computer-science/computer-science.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { BusinessAndManagementComponent } from './business-and-management/business-and-management.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FakeapiComponent } from './fakeapi/fakeapi.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewcsComponent } from './viewcs/viewcs.component';
import { AddcsComponent } from './addcs/addcs.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactUsComponent,
    ComputerScienceComponent,
    DataScienceComponent,
    BusinessAndManagementComponent,
    PagenotfoundComponent,
    FakeapiComponent,
    UserDetailsComponent,
    ViewcsComponent,
    AddcsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
