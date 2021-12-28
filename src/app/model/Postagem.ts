import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{

public date: Date;
public id: number;
public tema: Tema;
public texto: string;
public foto: string;
public titulo: string;
public usuario: Usuario;


}