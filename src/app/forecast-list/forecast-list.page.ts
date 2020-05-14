import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Forecast} from "../models/forecast";
import {ForecastService} from "../services/forecast.service";
import {City} from "../models/city";
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
    selector: 'app-forecast-list',
    templateUrl: './forecast-list.page.html',
    styleUrls: ['./forecast-list.page.scss'],
})
export class ForecastListPage implements OnInit {
    placeForm: FormGroup;
    cityName: FormControl;
    longitude: FormControl;
    latitude: FormControl;
    hasBeenValidated = false;
    cityObservable: Observable<City>
    forecastObservable: Observable<Forecast[]>
    forecastList = new Array<Forecast>()
    lookingUpPlace = false;

    constructor(
        private service: ForecastService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        console.log('constructor')
        this.createFormControls();
        this.createForm();

        this.forecastObservable = service.getForecastListObservable();
        this.forecastObservable.subscribe(result => this.forecastList = result);
        this.cityObservable = service.getCityObservable()
        this.cityObservable.subscribe(result => {
            console.log(result);
            this.cityName.setValue(result.name);
            this.latitude.setValue(result.latitude);
            this.longitude.setValue(result.longitude);
        })
    }

    ngOnInit() {
        console.log('ngOnInit')
        this.getForecast()
    }

    createFormControls() {
        this.cityName = new FormControl('', [
            // Validators.required,
            Validators.minLength(2),
            Validators.maxLength(254)
        ]);
        this.longitude = new FormControl('', [
            // Validators.required,
            Validators.minLength(1),
            Validators.maxLength(8)
        ]);
        this.latitude = new FormControl('', [
            // Validators.required,
            Validators.minLength(1),
            Validators.maxLength(8)
        ]);
    }

    createForm() {
        this.placeForm = new FormGroup({
            cityName: this.cityName,
            latitude: this.latitude,
            longitude: this.longitude
        });
    }

    async getPlace() {
        console.log('getPlace');
        this.lookingUpPlace = true;
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current', coordinates);
        this.cityName.setValue('');
        this.latitude.setValue(coordinates.coords.latitude.toFixed(4));
        this.longitude.setValue(coordinates.coords.longitude.toFixed(4));
        this.lookingUpPlace = false;
    }

    clearForm() {
        this.forecastList = [];
        this.placeForm.reset({cityName: '', latitude: null, longitude: null});
    }

    private getForecast() {
        console.log('getForecast')
        let city = '';
        let latitude = 0.0;
        let longitude = 0.0;
        if (this.cityName.valid) {
            city = this.cityName.value;
        }
        if (this.latitude.valid) {
            latitude = this.latitude.value;
        }
        if (this.longitude.valid) {
            longitude = this.longitude.value;
        }
        this.service.fetchForecast(city, latitude, longitude);
    }

    async showDetails(forecast: Forecast) {
        console.log(forecast);
        await this.router.navigate(
            ['forecast-details'],
            {
                // relativeTo: this.activatedRoute,
                state: {
                    forecast
                }
            }
        );
    }
}
