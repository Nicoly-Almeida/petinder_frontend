import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/service/authentication.service';
import { Pet } from 'src/app/shared/model/pet';
import { Usuario } from 'src/app/shared/model/usuario';
import { PetService } from 'src/app/shared/services/pet.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem-pet',
  templateUrl: './listagem-pet.component.html',
  styleUrls: ['./listagem-pet.component.scss']
})
export class ListagemPetComponent implements OnInit {
  usuario:Usuario;
  router: Router;
  pets: Pet[];
  pet: Pet;

  constructor(private petService: PetService, router: Router,
    private authenticationService: AuthenticationService, private usuarioService: UsuarioService) {
    this.router = router;
    this.pets = new Array<Pet>();
    this.pet = new Pet()
    this.usuario = new Usuario()
  }
  ngOnInit(): void {
    this.petService.listar().subscribe(
      pets => this.pets = pets
    );
    this.usuario = JSON.parse(this.authenticationService.getUser());
  }

  cadastrar(): void {
    this.router.navigate(['/cadastro-pet']);
  }

  editar(pet: Pet): void{
    this.router.navigate(['pet/' + pet.id])
  }

  logout(){
    this.authenticationService.logout()
  }

  deletar(pet: Pet): void {
    console.log(pet.id)
    this.petService.deletar(pet.id || '').subscribe(
      () => {
          Swal.fire({
          icon: 'success',
          title: 'Pet deletado com sucesso!',
          showConfirmButton: false,
          timer: 3000
        })
        this.pets = this.pets.filter(p => p.id !== pet.id)
      }
    );
  }

}
