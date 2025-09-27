import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompProductoListaComponent } from './comp-producto-lista.component';

describe('CompProductoListaComponent', () => {
  let component: CompProductoListaComponent;
  let fixture: ComponentFixture<CompProductoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompProductoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompProductoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
