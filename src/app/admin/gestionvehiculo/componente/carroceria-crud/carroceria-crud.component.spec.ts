import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroceriaCrudComponent } from './carroceria-crud.component';

describe('CarroceriaCrudComponent', () => {
  let component: CarroceriaCrudComponent;
  let fixture: ComponentFixture<CarroceriaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroceriaCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroceriaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
