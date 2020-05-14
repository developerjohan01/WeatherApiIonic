import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wapi-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.scss'],
})
export class WeatherImageComponent {

  @Input()
  imageName = ""

  imagePath() {
    return `assets/images/${this.imageName}@2x.png`
  }
}
