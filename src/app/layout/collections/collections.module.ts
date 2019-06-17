import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material-module';

const routes: Routes = [
  {
    path: '', component: CollectionsComponent
  }
];

@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class CollectionsModule { }
