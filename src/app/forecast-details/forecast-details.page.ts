import {Component, OnInit} from '@angular/core';
import {Forecast} from "../models/forecast";
import {Router} from "@angular/router";

@Component({
    selector: 'app-forecast-details',
    templateUrl: './forecast-details.page.html',
    styleUrls: ['./forecast-details.page.scss'],
})
export class ForecastDetailsPage implements OnInit {

    forecast: Forecast

    constructor(
        private router: Router
    ) {
        console.log('constructor')
        const state = router.getCurrentNavigation().extras.state;
        if (state && state.forecast) {
            this.forecast = state.forecast;
            console.log(this.forecast)
        }

    }

    ngOnInit() {
    }

}
