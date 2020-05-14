import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../../models/forecast";

@Component({
  selector: 'wapi-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {

  @Input()
  forecast: Forecast

  constructor() { }

  ngOnInit() {}

}
