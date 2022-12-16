import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/shared/model/pet';
import { PetFirestoreService } from 'src/app/shared/services/pet-firestore.service';

@Component({
  selector: 'app-listagem-pet',
  templateUrl: './listagem-pet.component.html',
  styleUrls: ['./listagem-pet.component.scss']
})
export class ListagemPetComponent implements OnInit {
  router: Router;
  pets: Pet[];

  constructor(private petService: PetFirestoreService, router: Router) {
    this.router = router;
    this.pets = new Array<Pet>();
  }
  ngOnInit(): void {
    this.petService.listar().subscribe(
      pets => this.pets = pets
    );
  }

  cadastrar(): void {
    this.router.navigate(['/cadastro-pet']);
  }

  deletar(pet: Pet): void {
    console.log(pet.id)
    this.petService.deletar(pet.id || '').subscribe(
      () => {
        this.pets = this.pets.filter(p => p.id !== pet.id)
      }
    );
  }

}
