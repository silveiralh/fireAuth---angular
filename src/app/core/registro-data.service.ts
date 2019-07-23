import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Registro} from './registros.model';


@Injectable({
  providedIn: 'root'
})
export class RegistroDataService {
  private regristroSource = new BehaviorSubject({registro: null, key: ''});
  currentRegistro=this.regristroSource.asObservable();

  constructor() { }

  changeRegristro(registro: Registro, key: string){
    this.regristroSource.next({registro: Registro, key: key});
  }
}
