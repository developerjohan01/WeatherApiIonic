import {Component, Input} from '@angular/core';

@Component({
    selector: 'wapi-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent {

    @Input()
    iconName = "";

}
