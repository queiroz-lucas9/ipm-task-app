import { Injectable } from '@angular/core';
import { AngularFirestore,
  AngularFirestoreCollection,
  CollectionReference
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Hino } from '../../models/hino.model';

/*
  Generated class for the HinosFirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HinosFirebaseProvider {
  hinos: AngularFirestoreCollection<Hino>;
  private PATH = 'hinos/';

  constructor(
    private db: AngularFirestore
  ) {
    this.setHinos();
  }

  private setHinos(): void {
    this.hinos = this.db.collection<Hino>('/hinos',
      (ref: CollectionReference) => ref
        .orderBy('numero', 'asc')
        .orderBy('titulo', 'asc'));
  }

  create(hino: Hino): Promise<void> {
    const uid = this.db.createId();
    return this.hinos.doc<Hino>(uid)
    .set({
      uid,
      titulo: hino.titulo,
      numero: hino.numero,
      letra:  hino.letra
    });
  }

  update(hino: Hino): Promise<void> {
    return this.hinos.doc<Hino>(hino.uid)
    .update(hino);
  }

  delete(hino: Hino): Promise<void> {
    return this.hinos.doc<Hino>(hino.uid)
    .delete();
  }

  get(uid: string): Observable<Hino> {
    return this.hinos.doc<Hino>(uid).valueChanges();
  }

}