import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  data='x'

  value= {
    name: 'Radhe',
    age:56
    
  }
  

  updateData(item:string){
    console.log(item);
    this.data=item
   
  }
}
