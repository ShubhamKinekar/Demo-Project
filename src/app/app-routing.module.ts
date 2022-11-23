import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DemoLinkComponent } from './demo-link/demo-link.component';
import { DemoComponent } from './demo/demo.component';
import { TestLinkComponent } from './test-link/test-link.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '', component: DemoComponent
  },
{ path: 'test', component: TestComponent},
{path: 'about', component: AboutComponent},
{path: 'test-link', component: TestLinkComponent},
{path: 'demo-link', component: DemoLinkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
