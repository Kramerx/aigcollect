import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocalitationComponent } from './geolocalitation.component';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '', component: GeolocalitationComponent
  }
];

@NgModule({
  declarations: [GeolocalitationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4LK5OQRfFsFtxJelGt5U13gKvROqBt50'
  }),
  ],
  exports: [RouterModule]
})
export class GeolocalitationModule { }
