import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MY-NEW-PROJECT';
  currentURL!: string;
  header!: boolean;

  constructor(private router:Router, private location: Location){

  }

  ngOnInit(): void {
    this.routerFunction();
  }

  routerFunction(){
    this.router.events.subscribe((val)=>{
      if(this.location.path()!= ''){
        this.currentURL = this.location.path();
       if(this.currentURL === '/login' || this.currentURL === '/sign-up'){
        this.header = false
       }else{
        this.header = true;
       }
      }

    })
  }
}
