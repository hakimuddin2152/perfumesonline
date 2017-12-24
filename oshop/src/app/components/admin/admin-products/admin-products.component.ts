import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';
import { forEach } from '@angular/router/src/utils/collection';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  categories$:Observable<any>
  
  constructor(private categoryService:CategoryService, private productService: ProductService) {
    this.categories$=categoryService.getCategories()
  }

// title:string
// description:string
// imageUrl:string
// category:string

//    product={
//      title:this.title,
//      description:this.description,
//      category:this.category,
//      imageUrl:this.imageUrl,

//    }
   save(product){
     console.log(product)
     this.productService.saveProduct(product)
   }
  ngOnInit() {
  }

}
