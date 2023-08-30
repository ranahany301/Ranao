import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
constructor (private service: ProductService) { }

productArr: any =[]
getAllProducts(){
  this.service.getProducts().subscribe(xyz=> {
    this.productArr =xyz
  })
}
ngOnInit(): void {
  this.getAllProducts()
}
deleteProduct(id:any){
this.service.delete(id).subscribe(sfa=>{
  console.log(id)
})
}}

