import { Component, Input, OnInit } from '@angular/core';
import City from 'src/app/models/city.model';

@Component({
  selector: 'app-city-infos',
  templateUrl: './city-infos.component.html',
  styleUrls: ['./city-infos.component.scss']
})
export class CityInfosComponent implements OnInit {
  @Input() city: City = new City()
  constructor() { }

  ngOnInit(): void {
  }

}
