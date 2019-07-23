import { Injectable } from '@angular/core';
import { Registro } from './registros.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private db: AngularFireDatabase) { }

  insert(registro: Registro){
    this.db.list('registro').push(registro)
    .then((result: any)=>{console.log(result.key);
    });
  }

  update(registro: Registro, key: string){
    this.db.list('registro').update(key, registro)
    .catch((error: any)=>{console.error(error);
    });
  }

  getAll(){
    return this.db.list('registro')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c=> ({key: c.payload.key, ...c.payload.val() }));
        })
      );
  }
  
  delete(key: string){
    this.db.object(`registro/${key}`).remove();
  }
}
