import { Usuario } from "./usuario";

export class Pet {
  id?: string;
  nome?: string;
  raca?: string;
  sexo?: string;
  idade?: number;

  constructor(id?: string, pet: Pet = {}) {
    this.id = id;
    this.nome = pet.nome;
    this.raca = pet.raca;
    this.sexo = pet.sexo;
    this.idade = pet.idade;

  }
}
