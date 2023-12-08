import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:7114/api/"

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Products/add",product,)
  }

}
