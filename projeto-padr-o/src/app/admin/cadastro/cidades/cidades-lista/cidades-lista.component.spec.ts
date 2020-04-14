import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesListaComponent } from './cidades-lista.component';

describe('CidadesListaComponent', () => {
  let component: CidadesListaComponent;
  let fixture: ComponentFixture<CidadesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
