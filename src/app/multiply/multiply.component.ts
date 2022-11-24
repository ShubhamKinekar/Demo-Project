import { Component, OnInit } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const a= 10;
    console.log(a)
  }
    
}
