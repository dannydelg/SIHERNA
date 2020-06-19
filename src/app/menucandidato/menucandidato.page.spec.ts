import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenucandidatoPage } from './menucandidato.page';

describe('MenucandidatoPage', () => {
  let component: MenucandidatoPage;
  let fixture: ComponentFixture<MenucandidatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucandidatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenucandidatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
