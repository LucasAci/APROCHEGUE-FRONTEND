import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tipo = environment.tipo
  title = 'APROCHEGUE';
  constructor(
    public auth:AuthService
    ){
  }

  logAdm(){
   if(this.tipo == "Adm"){
     return true
   }else {
     return false
   }
   }

   logNormal(){
    if(this.tipo == "Normal"){
      return true
    }else {
      return false
    }
   }
  
  
}
