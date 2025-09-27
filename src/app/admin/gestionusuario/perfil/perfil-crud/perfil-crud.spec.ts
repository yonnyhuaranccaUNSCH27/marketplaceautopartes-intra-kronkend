import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCrud } from './perfil-crud';

describe('PerfilCrud', () => {
  let component: PerfilCrud;
  let fixture: ComponentFixture<PerfilCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
