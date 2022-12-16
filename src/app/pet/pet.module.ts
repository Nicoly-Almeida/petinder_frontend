import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemPetComponent } from './listagem-pet/listagem-pet.component';



import {MatCardHarness} from '@angular/material/card/testing';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CadastroPetComponent } from './cadastro-pet/cadastro-pet.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    ListagemPetComponent,
    CadastroPetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardHarness,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ListagemPetComponent
  ]
})
export class PetModule { }
