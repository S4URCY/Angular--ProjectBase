import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosListaComponent } from './estados-lista.component';

describe('EstadosListaComponent', () => {
  let component: EstadosListaComponent;
  let fixture: ComponentFixture<EstadosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
