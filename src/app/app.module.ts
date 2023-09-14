import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradesComponent } from './grades/grades.component';
import { RandomComponent } from './random/random.component';
import { BankComponent } from './bank/bank.component';
import { PricePipe } from './price.pipe';
import { YearsPipe } from './years.pipe';
import { ImpDirective } from './imp.directive';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FilpkartComponent } from './filpkart/filpkart.component';
import { MailsComponent } from './mails/mails.component';
import { BoredomsComponent } from './boredoms/boredoms.component';
import { BooksComponent } from './books/books.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { NavComponent } from './nav/nav.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    BMIComponent,
    DirectivesComponent,
    TableComponent,
    PipesComponent,
    GradesComponent,
    RandomComponent,
    BankComponent,
    PricePipe,
    YearsPipe,
    ImpDirective,
    UsersComponent,
    VehiclesComponent,
    AccountsComponent,
    FilpkartComponent,
    MailsComponent,
    BoredomsComponent,
    BooksComponent,
    CreatevehicleComponent,
    CreateuserComponent,
    CreateaccountComponent,
    VehicleDetailsComponent,
    ParentComponent,
    ChildComponent,
    NavComponent,
    ItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
