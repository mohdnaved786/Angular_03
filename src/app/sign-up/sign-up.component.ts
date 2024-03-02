import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupReactiveForm!: FormGroup;
  myData: any[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.studentForm();
  }

  studentForm() {
    this.signupReactiveForm = this.formBuilder.group({
      'firstName': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'password': [null, [Validators.required]]
    })
  }

  signupForm() {
    console.log("===>", this.signupReactiveForm.value);
    localStorage.setItem('myAccount',JSON.stringify (this.signupReactiveForm.value));
    this.router.navigate(['/login'])
  }

}
