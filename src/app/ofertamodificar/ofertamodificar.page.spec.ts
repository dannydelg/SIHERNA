import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertamodificarPage } from './ofertamodificar.page';

describe('OfertamodificarPage', () => {
  let component: OfertamodificarPage;
  let fixture: ComponentFixture<OfertamodificarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertamodificarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertamodificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
