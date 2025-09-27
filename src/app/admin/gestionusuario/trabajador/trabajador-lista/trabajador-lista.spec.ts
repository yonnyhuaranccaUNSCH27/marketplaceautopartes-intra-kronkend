import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorLista } from './trabajador-lista';

describe('TrabajadorLista', () => {
  let component: TrabajadorLista;
  let fixture: ComponentFixture<TrabajadorLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajadorLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
