import { Component, Input, OnInit } from '@angular/core';
import DayModel from 'src/app/models/day.model';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent implements OnInit {
  @Input() day: DayModel = new DayModel({});

  constructor() { }

  ngOnInit(): void {
  }

}
