import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://aprochegue.herokuapp.com/Postagem', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://aprochegue.herokuapp.com/Postagem', postagem, this.token)
  }

  putPostagem(postagem:Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://aprochegue.herokuapp.com/Postagem',postagem,this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://aprochegue.herokuapp.com/postagens/${id}`,this.token)
  }

}
