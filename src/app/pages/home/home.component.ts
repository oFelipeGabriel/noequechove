import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import City from 'src/app/models/city.model';
import DayModel from 'src/app/models/day.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dias: any[] = []
  city: City = new City();
  baseUrl: string = 'https://api.hgbrasil.com/weather';
  apiKey: string = '4dc8c1dc';
  formatJson: string = 'json-cors';


  constructor() { }

  ngOnInit(): void {
    axios.get(
      `${this.baseUrl}?key=${this.apiKey}&format=${this.formatJson}&user_ip=remote`).then(res => {
      if(res.data?.results?.forecast?.length > 0) {
        res.data.results.forecast.map((dia: DayModel) => {
          this.dias.push(new DayModel(dia));
        });
        this.city = new City(res.data.results)
        console.log('result', this.city, res.data.results)
      }
      console.log(this.dias);
    }).catch(err => {
      console.log(err);
    }
    );
  }

}
