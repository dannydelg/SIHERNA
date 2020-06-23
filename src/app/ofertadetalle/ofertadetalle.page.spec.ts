import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertadetallePage } from './ofertadetalle.page';

describe('OfertadetallePage', () => {
  let component: OfertadetallePage;
  let fixture: ComponentFixture<OfertadetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertadetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertadetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
