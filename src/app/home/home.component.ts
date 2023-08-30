import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { filter } from 'rxjs';
import { style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  productArr:any[]=[]
constructor (private service: ProductService) { }
ngOnInit(): void {
  this.getAllProducts()
}
getAllProducts(){
  this.service.getProducts().subscribe((res:any)=> {
   this.productArr=res
  })
}

deleteProduct(id:any){
this.service.delete(id).subscribe(res=>{
  console.log(id)
})
}
getCategories(){
  this.service.getAllCategories().subscribe((res:any)=> {
    this.getCategories = res
  } , error => {
    alert( error)
  })}

  getProductsCategories(keyword:string) {
    this.service.getProductsByCategories(keyword).subscribe((res:any) => {
     
    
    })
  }

}


