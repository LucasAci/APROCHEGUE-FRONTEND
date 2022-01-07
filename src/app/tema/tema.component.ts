import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  nome = environment.nome

  foto = environment.foto
  
  tema: Tema = new Tema()
  listaTemas: Tema[]
  i: number

  tipo = environment.tipo 
  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
     if (environment.token == '') {
       this.router.navigate(['/entrar'])
     }
    this.findAllTemas()
  }
  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp

      for (this.i = 1;this. i <= this.listaTemas.length; this.i++){
        this.i
      }
    })
  }

  numeroLista(){
    for (let i = 1; i <= this.listaTemas.length; i++){
      i
    }
  }
  cadastrar() {
    console.log(environment)
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp

      alert('Tema Cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }


}
