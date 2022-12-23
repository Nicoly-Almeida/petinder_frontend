import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Usuario } from 'src/app/shared/model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { PetService } from 'src/app/shared/services/pet.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  router: Router;

  usuario : Usuario;

  constructor(router: Router, private UsuarioService: UsuarioService, private PetService: PetService) {
    this.router = router;
    this.usuario = new Usuario('', {});
  }

  ngOnInit(): void {
  }

  //erro pois nao consigo passar o pet pra o usuario
  //como corrigir?

  inserirUsuario(){
    this.UsuarioService.inserir(this.usuario).subscribe(
      users => {
        Swal.fire({
        icon: 'success',
        title: 'Usuário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        this.router.navigate(['/listagem-pet']);
      }, 3000);
      this.usuario = new Usuario('', {});
    },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao cadastrar usuário!',
        })
      }
      );
  }
}

