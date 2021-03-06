import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherImageComponent } from './weather-image.component';

describe('WeatherImageComponent', () => {
  let component: WeatherImageComponent;
  let fixture: ComponentFixture<WeatherImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherImageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build the image path', () => {
    component.imageName = 'some-name';
    expect(component.imagePath()).toEqual('assets/images/some-name@2x.png');
  });

});
