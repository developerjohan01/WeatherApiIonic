import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForecastListPageRoutingModule } from './forecast-list-routing.module';

import { ForecastListPage } from './forecast-list.page';
import {ComponentsModule} from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ForecastListPageRoutingModule
  ],
  declarations: [ForecastListPage]
})
export class ForecastListPageModule {}
