import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import City from 'src/app/models/city.model';

@Component({
  selector: 'app-city-infos',
  templateUrl: './city-infos.component.html',
  styleUrls: ['./city-infos.component.scss']
})
export class CityInfosComponent implements OnInit {
  @Input() city: City = new City();
  @Output() mudaCidade = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  alteraCidade(){
    this.mudaCidade.emit(true);
  }

}
