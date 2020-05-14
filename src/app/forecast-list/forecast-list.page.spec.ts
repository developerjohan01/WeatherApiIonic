import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForecastListPage } from './forecast-list.page';

describe('ForecastListPage', () => {
  let component: ForecastListPage;
  let fixture: ComponentFixture<ForecastListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
