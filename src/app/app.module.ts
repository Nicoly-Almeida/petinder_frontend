import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';

import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';

import {HttpClientModule} from '@angular/common/http';
import { ListagemPetComponent } from './pet/listagem-pet/listagem-pet.component';
import { FirestoreModule } from './firestore/firestore.module';
import { LoginFormComponent } from './core/authentication/login-form/login-form.component';
import { CadastroPetComponent } from './pet/cadastro-pet/cadastro-pet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    ListagemPetComponent,
    LoginFormComponent,
    CadastroPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FirestoreModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
