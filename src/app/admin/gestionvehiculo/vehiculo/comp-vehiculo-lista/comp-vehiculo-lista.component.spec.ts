import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVehiculoListaComponent } from './comp-vehiculo-lista.component';

describe('CompVehiculoListaComponent', () => {
  let component: CompVehiculoListaComponent;
  let fixture: ComponentFixture<CompVehiculoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompVehiculoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompVehiculoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
