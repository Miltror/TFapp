import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumeroDeTarjetaPage } from './numero-de-tarjeta.page';

describe('NumeroDeTarjetaPage', () => {
  let component: NumeroDeTarjetaPage;
  let fixture: ComponentFixture<NumeroDeTarjetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroDeTarjetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumeroDeTarjetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
