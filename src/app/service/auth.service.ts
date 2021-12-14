import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  entrar(usuarioLoginDTO:UsuarioLoginDTO):Observable<UsuarioLoginDTO>{
    return this.http.post<UsuarioLoginDTO>('https://aprochegue.herokuapp.com/usuarios/logar', usuarioLoginDTO)

  }
  cadastrar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('https://aprochegue.herokuapp.com/usuarios/cadastrar', usuario)

  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok

  }
  
}
