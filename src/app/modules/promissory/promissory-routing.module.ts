import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromissoryComponent } from './promissory.component';

const routes: Routes = [
  {
    path: '',
    component: PromissoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromissoryRoutingModule { }
