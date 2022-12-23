import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/shared/model/pet';
import { PetService } from 'src/app/shared/services/pet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.component.html',
  styleUrls: ['./cadastro-pet.component.scss']
})
export class CadastroPetComponent implements OnInit {
  editar;
  router: Router;

  pet : Pet;

  constructor(router: Router, private PetService: PetService, private route: ActivatedRoute) {
    this.router = router;
    this.pet = new Pet('', {});
    this.editar = false
  }

  ngOnInit(): void {
    if (this.route.snapshot.params["id"]){
      this.editar = true
      this.PetService.pesquisarPorId(this.route.snapshot.params["id"]).subscribe(
        pet => {
          this.pet = pet
          console.log(this.pet)
        }
      )
    }
  }


  inserirPet(){
    this.PetService.inserir(this.pet).subscribe(
      pets => {
        Swal.fire({
        icon: 'success',
        title: 'Pet cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        this.router.navigate(['/listagem-pet']);
      }, 3000);
      this.pet = new Pet('', {});
    },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao cadastrar pet!',
        })
      }
      );
  }

  editarPet(){
    this.PetService.atualizar(this.pet).subscribe(
      pets => {
        Swal.fire({
        icon: 'success',
        title: 'Pet editado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        this.router.navigate(['/listagem-pet']);
      }, 3000);
    },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao editar pet!',
        })
      }
      );
  }
}
