export class Usuario{
  id?: string;
  nome?: string;
  email?: string;
  senha?: string;
  repitasenha?: string;

  constructor(id?: string, usuario: Usuario = {}) {
    this.id = id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.repitasenha = usuario.repitasenha;
  }
}
