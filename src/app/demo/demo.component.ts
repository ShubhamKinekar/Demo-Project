import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoserviceService } from '../demoservice.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title = "Angular"
  user: any;
  demoservice: any;
  Date =  Date.now();
  users={
    name: 'shubham',
    age: 10
  }

  constructor(private http: HttpClient, private service : DemoserviceService) {
    this.getApiData()
   }

  ngOnInit(): void {
   
  }
  getApiData(){
     this.service.getMethod().subscribe(res =>{
      this.user = res;
      console.log(res);
    })
   
  }
}
