import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../../models/productResponseModel';
import { response } from 'express';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  apiUrl = "https://localhost:7114/api/products/getall"
 
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpClient
    .get<ProductResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.products = response.data
    });
  }

}
