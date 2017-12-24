import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) {

   }

   getProducts(): Observable<any> {
    return this.db.list('/products').valueChanges()
   }

   saveProduct(product){
     return this.db.list('/products').push(product)
   }


}
