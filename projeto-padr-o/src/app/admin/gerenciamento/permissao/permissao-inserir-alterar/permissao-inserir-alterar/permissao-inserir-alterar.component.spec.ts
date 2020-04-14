import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoInserirAlterarComponent } from './permissao-inserir-alterar.component';

describe('PermissaoInserirAlterarComponent', () => {
  let component: PermissaoInserirAlterarComponent;
  let fixture: ComponentFixture<PermissaoInserirAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissaoInserirAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissaoInserirAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
