import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  manageReactiveForm!: FormGroup;
  // myData: any[] = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.naved2Form();
    // console.log("myData===>", this.myData)
  }

  naved2Form() {
    this.manageReactiveForm = this.formBuilder.group({
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'address': [null, [Validators.required]],
      'phone': [null, [Validators.required]],
    })
  }

  manageForm() {
    console.log("===>", this.manageReactiveForm.value);
  }
}
