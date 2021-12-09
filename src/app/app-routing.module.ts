import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path:"", redirectTo: "testemenu", pathMatch: "full"},
  {path:"testemenu", component: MenuComponent},
  {path:"entrar", component: EntrarComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"sobre", component: SobreComponent},
  {path:"side", component: TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
