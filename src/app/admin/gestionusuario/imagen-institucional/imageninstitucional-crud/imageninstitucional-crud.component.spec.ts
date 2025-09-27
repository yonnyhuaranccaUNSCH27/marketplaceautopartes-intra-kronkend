import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageninstitucionalCrudComponent } from './imageninstitucional-crud.component';

describe('ImageninstitucionalCrudComponent', () => {
  let component: ImageninstitucionalCrudComponent;
  let fixture: ComponentFixture<ImageninstitucionalCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageninstitucionalCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageninstitucionalCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
