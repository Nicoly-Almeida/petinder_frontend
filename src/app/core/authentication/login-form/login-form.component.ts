import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  hide = true;
  login = {
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required])
  }


  constructor(private authenticationService: AuthenticationService , private router: Router) { }

  ngOnInit(): void {
  }

  auth(){
    this.authenticationService.login(this.login.email.value || '', this.login.senha.value || '')

  }


  formValid() {
    return this.login.email.valid && this.login.senha.valid;
  }


  getErrorEmailMessage() {
    if (this.login.email.hasError('required')) {
      return 'Você deve inserir um endereço de e-mail';
    }

    return this.login.email.hasError('email') ? 'Não é um email válido' : '';
  }
  getErrorSenhaMessage() {
    if (this.login.senha.hasError('required')) {
      return 'Você deve inserir uma senha';
    }

    return ''
  }

}
