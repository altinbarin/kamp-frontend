import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

productAddForm: FormGroup;
constructor(private formBuilder:FormBuilder,private productService:ProductService, private toastrService:ToastrService) {}

ngOnInit(): void{
  this.createProductAddForm();
}

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName: ["",Validators.required],
      unitPrice:["", Validators.required],
      unitsInStock:["", Validators.required],
      categoryId:["", Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModule = Object.assign({},this.productAddForm.value) 
      this.productService.add(productModule).subscribe(data=>{
        console.log(data)
        this.toastrService.success(data.message,"Başarılı")
      },dataError=>{
        console.log(dataError)
        this.toastrService.error(dataError.error)
      })
    }
    else{
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }

  }

}
