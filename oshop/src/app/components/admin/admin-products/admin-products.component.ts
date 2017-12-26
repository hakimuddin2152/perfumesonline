import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';
import { forEach } from '@angular/router/src/utils/collection';
import { async } from '@angular/core/testing';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  categories$:Observable<any>
  showProductForm:boolean
  showCategoryForm:boolean=true
  constructor(private productService: ProductService) {
    this.categories$=productService.getCategories()
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
   saveProduct(product){
     this.productService.saveProduct(product)
   }

   saveCategory(category){
    this.productService.saveCategory(category)
   }

   showForm(event)
   {
     let linkId=event.srcElement.attributes.id.nodeValue
     console.log(linkId)
     console.log(event)
     if(linkId=="productLink")
     {
     this.showCategoryForm=false
     this.showProductForm=true
     }
     else if (linkId=="categoryLink")
     {
      this.showProductForm=false
       this.showCategoryForm=true
      
     }
   }
  ngOnInit() {
  }

}
