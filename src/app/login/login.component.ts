import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginReactiveForm!: FormGroup;
  myAccountData: any;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    let mydata: any = localStorage.getItem('myAccount')
    this.myAccountData = JSON.parse(mydata)
    this.navedForm();
  }

  navedForm() {
    this.loginReactiveForm = this.formBuilder.group({
      'email': [null, [Validators.required]],
      'password': [null, [Validators.required]]
    })
  }

  loginForm() {
    console.log("mydata==>", this.myAccountData);
    if (this.loginReactiveForm.value.email === this.myAccountData.email && this.loginReactiveForm.value.password === this.myAccountData.password) {
      console.log("login successfully!!");
      this.router.navigate(['/manage-employee'])
    }else{
      alert("pls fill correct information!!")
    }

    console.log("===>", this.loginReactiveForm.value);

    
  }

}
