import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wapi-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {

    @Input()
    iconName = "";
}
