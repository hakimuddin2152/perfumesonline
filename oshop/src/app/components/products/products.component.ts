import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories$:Observable<any>;
  products$:Observable<any>
  imageUrl='../../assets/img/image-'
  imageExt='.jpg'
  constructor(private productService:ProductService) {
    this.categories$=productService.getCategories()
    this.products$=productService.getProducts()
    console.log(this.categories$)
   }
 
  ngOnInit() {
  }

  
}
