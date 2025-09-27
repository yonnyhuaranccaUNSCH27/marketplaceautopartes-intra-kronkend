import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifarioListaComponent } from './tarifario-lista.component';

describe('TarifarioListaComponent', () => {
  let component: TarifarioListaComponent;
  let fixture: ComponentFixture<TarifarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifarioListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
