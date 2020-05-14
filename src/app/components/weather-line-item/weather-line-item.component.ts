import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../../models/forecast";

@Component({
  selector: 'wapi-weather-line-item',
  templateUrl: './weather-line-item.component.html',
  styleUrls: ['./weather-line-item.component.scss'],
})
export class WeatherLineItemComponent implements OnInit {

  @Input()
  forecast: Forecast

  constructor() { }

  ngOnInit() {
    console.log(this.forecast);
  }

}
