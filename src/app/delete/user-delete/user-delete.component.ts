import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  usuario: Usuario = new Usuario()
  listaUsuario: Usuario[]
  idUser: number
  i: number
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: AuthService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
    this.findAllUser()
  }
  findAllUser() {
    this.userService.getAllUser().subscribe((resp: Usuario[]) => {
      this.listaUsuario = resp

      for (this.i = 1;this. i <= this.listaUsuario.length; this.i++){
        this.i
      }
    })
  }

  numeroLista(){
    for (let i = 1; i <= this.listaUsuario.length; i++){
      i
    }
  }

  findByIdUser(id: number){
    this.userService.getByIdUser(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

 apagar(){
   console.log(this.idUser)
   this.userService.deleteUser(this.idUser).subscribe(()=>{
     alert('Usuário apagado com sucesso"')
     this.findAllUser()
   })
 }
  

}
