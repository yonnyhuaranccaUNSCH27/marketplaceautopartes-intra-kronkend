import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilLista } from './perfil-lista';

describe('PerfilLista', () => {
  let component: PerfilLista;
  let fixture: ComponentFixture<PerfilLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
