import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ForecastDetailsPageRoutingModule} from './forecast-details-routing.module';

import {ForecastDetailsPage} from './forecast-details.page';
import {ComponentsModule} from "../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        ForecastDetailsPageRoutingModule
    ],
    declarations: [ForecastDetailsPage]
})
export class ForecastDetailsPageModule {
}
