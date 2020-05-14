import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from "./avatar/avatar.component";
import {IonicModule} from "@ionic/angular";
import {WeatherCardComponent} from "./weather-card/weather-card.component";
import {WeatherLineItemComponent} from "./weather-line-item/weather-line-item.component";
import {WeatherImageComponent} from "./weather-image/weather-image.component";
import {ThumbnailComponent} from "./thumbnail/thumbnail.component";
import {ContentComponent} from "./content/content.component";


@NgModule({
    declarations: [
        AvatarComponent,
        WeatherCardComponent,
        WeatherLineItemComponent,
        WeatherImageComponent,
        ThumbnailComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        AvatarComponent,
        WeatherCardComponent,
        WeatherLineItemComponent,
        WeatherImageComponent,
        ThumbnailComponent,
        ContentComponent
    ]
})
export class ComponentsModule {
}
