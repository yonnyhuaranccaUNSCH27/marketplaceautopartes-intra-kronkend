import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorCrud } from './trabajador-crud';

describe('TrabajadorCrud', () => {
  let component: TrabajadorCrud;
  let fixture: ComponentFixture<TrabajadorCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajadorCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
