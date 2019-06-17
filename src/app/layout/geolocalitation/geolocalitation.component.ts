import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocalitation',
  templateUrl: './geolocalitation.component.html',
  styleUrls: ['./geolocalitation.component.scss']
})
export class GeolocalitationComponent implements OnInit {

  lat: number = 0.347264;
  lng: number = -78.122065;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
