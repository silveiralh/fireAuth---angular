import { Registro } from './registros.model';
export class FirebaseUserModel {
  image: string;
  name: string;
  registrosUser: Registro[];
  provider: string;

  constructor(){
    this.image = "";
    this.name = "";
    this.provider = "";
    this.registrosUser=[];
  }
}
