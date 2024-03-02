import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , } from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  navedReactiveForm!: FormGroup;

  ngOnInit(): void {
    this.navedForm()
  }

  navedForm(){
   this.navedReactiveForm = this.formBuilder.group({
    'firstName': [null ,[Validators.required]],
    'lastName': [null ,[Validators.required]]
  })
  }

  musahidForm(){
    console.log('value===>' , this.navedReactiveForm.value);
  }

}
