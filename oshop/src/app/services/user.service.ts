import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { AngularFireDatabase} from 'angularfire2/database'
import { AppUser } from '../model/app-user';
import { AngularFireObject, AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase/app';


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {
    
   }
   isAdminUser:boolean
   save(user: firebase.User){
    
    this.db.object('/users/'+user.uid).set({
      name:user.displayName,
      email:user.email,
      isAdmin:true
    })
   }
   
    getUser (uid:string) : Observable<any>{
    return this.db.object('/users/'+uid).valueChanges()
    }

  }
