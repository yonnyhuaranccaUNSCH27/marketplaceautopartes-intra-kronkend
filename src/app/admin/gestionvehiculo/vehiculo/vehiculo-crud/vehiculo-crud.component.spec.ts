import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCrudComponent } from './vehiculo-crud.component';

describe('VehiculoCrudComponent', () => {
  let component: VehiculoCrudComponent;
  let fixture: ComponentFixture<VehiculoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
