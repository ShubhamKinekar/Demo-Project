import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit , OnChanges {

  @Input() myValue: any;
  name = false

  constructor() {
    console.log('Constructour Called');
   }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  } 
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called');
    console.log('ngOnChanges called' + ''+ 'changes.myValue.currentvalue');
  }
  testDone(){
    var a= confirm("Good Morning");

    // alert(a)
     if(a== true){
      alert("Thank You..!")
     }else(
      alert("Sorry..!")

     )
  }

  // Display the input field value in console and text
  displayName ='';
  getValue(val: string)
  {
    console.warn(val);
    // this.displayName = val
  }

  // Counter
  count=0;
  getCounter(type: any)
  {
    type === 'add' ? this.count++ :  this.count--;
  }
}
