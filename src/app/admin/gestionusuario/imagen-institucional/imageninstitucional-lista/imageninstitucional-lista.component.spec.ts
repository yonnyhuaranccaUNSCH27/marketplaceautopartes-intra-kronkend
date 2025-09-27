import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageninstitucionalListaComponent } from './imageninstitucional-lista.component';

describe('ImageninstitucionalListaComponent', () => {
  let component: ImageninstitucionalListaComponent;
  let fixture: ComponentFixture<ImageninstitucionalListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageninstitucionalListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageninstitucionalListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
