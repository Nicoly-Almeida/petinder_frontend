import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPetComponent } from './listagem-pet.component';

describe('ListagemPetComponent', () => {
  let component: ListagemPetComponent;
  let fixture: ComponentFixture<ListagemPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
