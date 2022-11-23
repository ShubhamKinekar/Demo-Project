import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-demo-link',
  templateUrl: './demo-link.component.html',
  styleUrls: ['./demo-link.component.css']
})
export class DemoLinkComponent implements OnInit {
  user: any;
  Date = new Date();
  constructor(private http: HttpClient, private service : DemoserviceService) { 

    
  }

  ngOnInit(): void {
    this.showData();
  }

  showData(){
    this.service.getMethod().subscribe(res =>{
     this.user = res;
   })
 
 }
}
