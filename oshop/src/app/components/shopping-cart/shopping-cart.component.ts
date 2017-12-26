import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private db:AngularFireDatabase) { }
save(obj){
  this.db.object('/files/'+obj.name).set(btoa(obj.description))
}
  ngOnInit() {
  }

}
