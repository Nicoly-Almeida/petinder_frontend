import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListagemPetComponent } from './pet/listagem-pet/listagem-pet.component';
import { CadastroPetComponent } from './pet/cadastro-pet/cadastro-pet.component';
import { LoginFormComponent } from './core/authentication/login-form/login-form.component';

const routes: Routes = [
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'cadastro-pet',
    component: CadastroPetComponent
  },
  {
    path: 'listagem-pet',
    component: ListagemPetComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
