import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { HeaderComponent } from './header/header.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewformComponent } from './newform/newform.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ManageEmployeeComponent,
    HeaderComponent,
    NewListComponent,
    NewformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
