import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaofertaPage } from './listaoferta.page';

describe('ListaofertaPage', () => {
  let component: ListaofertaPage;
  let fixture: ComponentFixture<ListaofertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaofertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaofertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
