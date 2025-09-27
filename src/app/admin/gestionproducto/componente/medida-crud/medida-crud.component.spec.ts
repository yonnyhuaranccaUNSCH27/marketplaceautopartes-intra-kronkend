import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaCrudComponent } from './medida-crud.component';

describe('MedidaCrudComponent', () => {
  let component: MedidaCrudComponent;
  let fixture: ComponentFixture<MedidaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedidaCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedidaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
