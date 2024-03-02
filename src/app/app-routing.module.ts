import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewformComponent } from './newform/newform.component';

const routes: Routes = [
  {
    path : '' , component: SignUpComponent
  },
  {
    path : 'login' , component: LoginComponent
  },
  {
    path : 'manage-employee' , component: ManageEmployeeComponent
  },
  {
    path : 'new-list' , component: NewListComponent
  },
  {
    path : 'newform' , component: NewformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
