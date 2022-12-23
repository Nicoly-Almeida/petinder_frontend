import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListagemPetComponent } from './pet/listagem-pet/listagem-pet.component';
import { CadastroPetComponent } from './pet/cadastro-pet/cadastro-pet.component';
import { LoginFormComponent } from './core/authentication/login-form/login-form.component';
import { GuardService } from './core/guards/guard.service';
import { NotGuardService } from './core/guards/not-guard.service'

const routes: Routes = [
  {
    path: '',
    component: ListagemPetComponent,
    children: [
      { path: '', component: ListagemPetComponent},
      { path: 'cadastro-pet', component: CadastroPetComponent},
    ],
    canActivate: [GuardService]
  },
  {
    path: '',
    component: LoginFormComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginFormComponent },
      { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
    ],
    canActivate: [NotGuardService]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
