import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicaoInserirAlterarComponent } from './atribuicao-inserir-alterar.component';

describe('AtribuicaoInserirAlterarComponent', () => {
  let component: AtribuicaoInserirAlterarComponent;
  let fixture: ComponentFixture<AtribuicaoInserirAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtribuicaoInserirAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtribuicaoInserirAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
