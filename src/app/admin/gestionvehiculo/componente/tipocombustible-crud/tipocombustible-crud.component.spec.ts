import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocombustibleCrudComponent } from './tipocombustible-crud.component';

describe('TipocombustibleCrudComponent', () => {
  let component: TipocombustibleCrudComponent;
  let fixture: ComponentFixture<TipocombustibleCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipocombustibleCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocombustibleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
