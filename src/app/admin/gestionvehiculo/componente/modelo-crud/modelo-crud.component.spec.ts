import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCrudComponent } from './modelo-crud.component';

describe('ModeloCrudComponent', () => {
  let component: ModeloCrudComponent;
  let fixture: ComponentFixture<ModeloCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
