import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nome = environment.nome

  fotoInicio = environment.foto

  id = environment.id

  tipoInicio = environment.tipo 

  postagem: Postagem = new Postagem()
  listaPostagens : Postagem[]
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number 
  tipo = environment.tipo 
  foto: string
  email: string

  modalClose: string = "Open"
 


  user: Usuario = new Usuario()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
   ) { }

  ngOnInit() {
  window.addEventListener('scroll', this.scroll, true)
  if (environment.token == ''){
    this.router.navigate(['/sobre'])
  }
  this.authService.refreshToken()
  

    this.getAllTemas()
    this.getAllPostagens()
    this.findByIdUser()


  }


  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0

  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }


   getByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }


  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario)=>{
      this.user = resp
    })
    }


    publicar(){
      this.tema.id = this.idTema
      this.postagem.tema = this.tema
     

     this.user.id = this.idUser
     this.postagem.usuario = this.user
    this.user.foto =this.foto 
    this.user.email= this.email 
      
     console.log(this.postagem)
            
        if(this.postagem.texto == null || this.postagem.texto == "") alert('Preencha todos os campos!')
        else if (this.postagem.titulo == null || this.postagem.titulo == "") alert('Preencha todos os campos!')
        else if(this.postagem.tema.descricao == null)alert('Preencha todos os campos!')
        else{
          this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {  
          this.postagem = resp
          alert('Postagem realizada com sucesso!')
          this.postagem = new Postagem()
          this.getAllPostagens()
          this.modalClose = "Close"
        })
          
        }
        
      
  
    }



















    scroll = (): void => {

      let scrollHeigth;
   
      if(window.innerWidth < 350){
       scrollHeigth = 150;
      }else if(window.innerWidth < 500 && window.innerWidth > 350){
       scrollHeigth = 250;
      }else if(window.innerWidth < 700 && window.innerWidth > 500){
       scrollHeigth = 350;
      }else if(window.innerWidth < 1000 && window.innerWidth > 700){
       scrollHeigth = 500;
      }else{
        scrollHeigth = 650;
      }
   
       if(window.scrollY >= scrollHeigth){
         document.body.style.setProperty('--navbar-scroll', "white");
         document.body.style.setProperty('--navbar-scroll-text', "black");
         document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
       }else if(window.scrollY < scrollHeigth){
         document.body.style.setProperty('--navbar-scroll', "transparent");
         document.body.style.setProperty('--navbar-scroll-text', "white");
         document.body.style.setProperty('--navbar-scroll-shadow', "none");
       }
     }


}
