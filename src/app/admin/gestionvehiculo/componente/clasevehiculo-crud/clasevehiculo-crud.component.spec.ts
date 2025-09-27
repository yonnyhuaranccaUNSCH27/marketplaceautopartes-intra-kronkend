import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasevehiculoCrudComponent } from './clasevehiculo-crud.component';

describe('ClasevehiculoCrudComponent', () => {
  let component: ClasevehiculoCrudComponent;
  let fixture: ComponentFixture<ClasevehiculoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasevehiculoCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasevehiculoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
