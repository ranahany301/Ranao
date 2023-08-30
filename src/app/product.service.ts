import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  delete(id:number){
    return this.http.delete(`https://fakeapistore.com/products/${id}`)
  }
  getAllCategories() {
    return this.http.get('https://fakeapistore.com/products/categories')
  }
  getProductsByCategories(keyword:string) {
    return this.http.get('http://fakestoreapi.com/products/categories/'+keyword)
  }}
  
