import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }
  @Output() updateDataEvent= new EventEmitter<string>();
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called');
  }
  getValue(){
    return "Welcome to Angular"
  }
}
