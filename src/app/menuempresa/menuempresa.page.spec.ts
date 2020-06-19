import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuempresaPage } from './menuempresa.page';

describe('MenuempresaPage', () => {
  let component: MenuempresaPage;
  let fixture: ComponentFixture<MenuempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuempresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
