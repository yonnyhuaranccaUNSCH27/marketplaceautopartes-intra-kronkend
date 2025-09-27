import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenCrudComponent } from './origen-crud.component';

describe('OrigenCrudComponent', () => {
  let component: OrigenCrudComponent;
  let fixture: ComponentFixture<OrigenCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrigenCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrigenCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
