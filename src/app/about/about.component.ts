import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: any;
  demo = 'false';
  displayName = true;
  displayValue = true;
  title = 'For Loop'

  

  constructor(private http: HttpClient, private service : DemoserviceService) { }

  ngOnInit(): void {
    // this.showData();
  }
  showData(){
    this.service.getMethod().subscribe(res =>{
     this.user = res;
   })
  }

  data=['Shubham', 'Sagar','Amar']
  dataDetails =[
    { name:'Shubham', email: 'shub@gmail.com',No:'9898989'},
    { name:'Sagar', email: 'shub@gmail.com',No:'9898989'},
  ]
  isValid: boolean= true;

  onClick(){
    this.isValid= true
  }

}
