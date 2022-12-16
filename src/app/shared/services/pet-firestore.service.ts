import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Pet} from '../model/pet';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
 providedIn: 'root'
})
export class PetFirestoreService {

 colecaoPet: AngularFirestoreCollection<Pet>;
 NOME_COLECAO = 'pets';

 constructor(private afs: AngularFirestore) {
   this.colecaoPet = afs.collection(this.NOME_COLECAO);
 }

 listar(): Observable<Pet[]> {
   // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
   return this.colecaoPet.valueChanges({idField: 'id'});
 }



 inserir(pet: Pet): Observable<object> {
   // removendo id pois ele está undefined, já que um novo usuário
   delete pet.id;
   // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
   // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
   return from(this.colecaoPet.add(Object.assign({}, pet)));
 }

 deletar(id: string): Observable<void> {
   return from(this.colecaoPet.doc(id).delete());
 }

 obterPorId(id: string): Observable<Pet> {
   // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
   //  para o tipo usuário
   return this.colecaoPet.doc(id).get().pipe(map(document => new Pet(document.id, document.data())));
 }

 editar(pet: Pet): Observable<void> {
   // removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
   delete pet.id;
   return from(this.colecaoPet.doc(pet.id).update(Object.assign({}, pet)));
 }

}
