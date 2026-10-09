import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrientadorCursos } from './orientador-cursos';

describe('OrientadorCursos', () => {
  let component: OrientadorCursos;
  let fixture: ComponentFixture<OrientadorCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrientadorCursos],
    }).compileComponents();

    fixture = TestBed.createComponent(OrientadorCursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
