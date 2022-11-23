import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { TestLinkComponent } from './test-link/test-link.component';
import { DemoLinkComponent } from './demo-link/demo-link.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TestComponent,
    AboutComponent,
    TestLinkComponent,
    DemoLinkComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
  
    ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
