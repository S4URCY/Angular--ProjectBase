import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicaoListaComponent } from './atribuicao-lista.component';

describe('AtribuicaoListaComponent', () => {
  let component: AtribuicaoListaComponent;
  let fixture: ComponentFixture<AtribuicaoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtribuicaoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtribuicaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
