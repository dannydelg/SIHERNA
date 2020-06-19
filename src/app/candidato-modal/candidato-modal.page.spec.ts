import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidatoModalPage } from './candidato-modal.page';

describe('CandidatoModalPage', () => {
  let component: CandidatoModalPage;
  let fixture: ComponentFixture<CandidatoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidatoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
