import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BMIComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradesComponent } from './grades/grades.component';
import { RandomComponent } from './random/random.component';
import { BankComponent } from './bank/bank.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FilpkartComponent } from './filpkart/filpkart.component';
import { MailsComponent } from './mails/mails.component';
import { BoredomsComponent } from './boredoms/boredoms.component';
import { BooksComponent } from './books/books.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AboutComponent } from './about/about.component';
import { authenticationGuard } from './authentication.guard';
import { notifyGuard } from './notify.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  {
    path: 'dashboard', component: DashboardComponent,canActivate:[authenticationGuard],children: [
      { path: 'about', component: AboutComponent },
      { path: 'home', component: PageNotFoundComponent },
      { path: 'calculator', component: CalculatorComponent },
      {path:'bmi',component:BMIComponent},
      {path:'rectangle',component:RectangleComponent},
      {path:'directive',component:DirectivesComponent},
       {path:'table',component:TableComponent},
       {path:'pipes',component:PipesComponent},
      {path:'grades',component:GradesComponent},
      {path:'Random',component:RandomComponent},
       {path:'bank',component:BankComponent},
       {path:'users',component:UsersComponent},
       {path:'vehicles',component:VehiclesComponent, canDeactivate:[notifyGuard]},
       {path:'accounts',component:AccountsComponent},
      {path:'flipkart',component:FilpkartComponent},
      {path:'mails',component:MailsComponent},
      {path:'boredoms',component:BoredomsComponent},
      {path:'books', component:BooksComponent},
      {path:'createvehicle',component:CreatevehicleComponent, canDeactivate:[notifyGuard]},
      {path:'createuser',component:CreateuserComponent},
      {path:'createaccounts',component:CreateaccountComponent},
       {path:'vehicle-details/:id',component:VehicleDetailsComponent},
       {path:'edit-vehicle/:id',component:CreatevehicleComponent},
      {path:'parent',component:ParentComponent},
      {path:'child',component:ChildComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
