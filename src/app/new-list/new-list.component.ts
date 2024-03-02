import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit{

  studentReactiveForm!: FormGroup;
  myData: any[] = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm();
    console.log("myData===>", this.myData)
  }

  studentForm(){
    this.studentReactiveForm = this.formBuilder.group({
      'name' : [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'address': [null, [Validators.required]],
      'phone': [null, [Validators.required]]
    })
  }

  submitStudentForm(){
    this.myData.push(this.studentReactiveForm.value);
    // console.log("myyyy===>",this.myData)

  }

}