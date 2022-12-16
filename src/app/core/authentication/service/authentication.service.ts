import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private usuarioService: UsuarioFirestoreService, private router: Router) { }

  login(email:string, senha:string) : boolean{
    this.usuarioService.listar().subscribe(item => {
      const account = item.find(x => x.email == email && x.senha == senha);
      if(account){
        window.localStorage.setItem('user', JSON.stringify(account));
        this.router.navigate(['/listagem-pet']);
        return true;
      } else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email ou senha inválidos!',
        })
        return false;
      }

    })
    return false;


  }

  getUser(): string{
    return window.localStorage.getItem('user') || '';
  }

  logout(){
    window.localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
