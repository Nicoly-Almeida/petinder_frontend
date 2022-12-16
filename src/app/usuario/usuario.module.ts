import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CadastroUsuarioComponent
  ]
})
export class UsuarioModule { }
