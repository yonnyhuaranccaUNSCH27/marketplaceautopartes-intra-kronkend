import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifarioCrudComponent } from './tarifario-crud.component';

describe('TarifarioCrudComponent', () => {
  let component: TarifarioCrudComponent;
  let fixture: ComponentFixture<TarifarioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifarioCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifarioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
