import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { AngularFireDatabase} from 'angularfire2/database'
import { AppUser } from './model/app-user';
import { AngularFireObject, AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase/app';


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {
    
   }
   isAdminUser:boolean
   save(user: firebase.User){
    
    this.db.object('/users/'+user.uid).update({
      name:user.displayName,
      email:user.email,
      isAdmin:false
    })
   }
   //getUser (uid:string) : Observable<AngularFireObject<AppUser>{
    getUser (uid:string) : Observable<any>{
     //console.log(this.db.list('/users/'+uid).valueChanges()
    return this.db.object('/users/'+uid).valueChanges()
    }

  }
