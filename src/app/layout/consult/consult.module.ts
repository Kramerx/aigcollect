import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './consult.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material-module';

const routes: Routes = [
  {
    path: '', component: ConsultComponent
  }
];

@NgModule({
  declarations: [ConsultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class ConsultModule { }
