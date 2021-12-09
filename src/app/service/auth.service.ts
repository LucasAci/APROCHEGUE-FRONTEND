import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsDTO } from '../model/CredentialsDTO';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  entrar(credentialsDTO:CredentialsDTO):Observable<CredentialsDTO>{
    return this.http.post<CredentialsDTO>('https://aprochegue.herokuapp.com/usuarios/logar', credentialsDTO)

  }
  cadastrar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('https://aprochegue.herokuapp.com/usuarios/cadastrar', usuario)

  }
  
}
