import { Component, OnInit } from '@angular/core';
import { Registro } from '../core/registros.model';
import { RegistroService } from '../core/registros.service';
import { RegistroDataService } from '../core/registro-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  registro: Registro;
  key: string = "";
  inserirRegistroForm: FormGroup;

  // constructor(private registroService: RegistroService
  // ) { }

  ngOnInit() {
    this.inserirRegistroForm = new FormGroup({
      data_created: new FormControl(),
      categoria: new FormControl(),
      descricao: new FormControl(),
      tipo: new FormControl(),
      valor: new FormControl(),
    });
    // this.registroDataService.currentRegistro.subscribe(data=>{
    //   if(data.registro && data.key){
    //     var date = new Date();
    //     var dataAtual = date.getDate() + date.getMonth() + date.getFullYear() +"";
    //     this.registro = new Registro();
    //     this.registro.data_created=this.inserirRegistroForm.get(data.data_created);
    //     this.registro.categoria = data.registro.categoria;
    //     this.registro.descricao = data.registro.descricao;
    //     this.registro.tipo = data.registro.tipo;
    //     this.registro.valor = data.registro.valor;
    //     this.key = data.key;
        
    //   }
    // })
  }


  onSubmit() {
    if (this.key) {
      this.registroService.update(this.registro, this.key);
    } else {
      this.registroService.insert(this.registro)
    }
    this.registro = new Registro();
  }
}
