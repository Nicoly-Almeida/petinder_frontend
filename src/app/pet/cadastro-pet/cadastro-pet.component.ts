import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/shared/model/pet';
import { PetFirestoreService } from 'src/app/shared/services/pet-firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.component.html',
  styleUrls: ['./cadastro-pet.component.scss']
})
export class CadastroPetComponent implements OnInit {

  router: Router;

  pet : Pet;

  constructor(router: Router, private PetService: PetFirestoreService) {
    this.router = router;
    this.pet = new Pet('', {});
  }

  ngOnInit(): void {
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
          text: 'Erro ao cadastrar usuário!',
        })
      }
      );
  }
}
