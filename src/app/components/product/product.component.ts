import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { COGNITO_URL } from '../../constant/app-constants';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent {
    productsData: any[] = [];
    searchControl = new FormControl('');
    selectControl = new FormControl('1');
    category = [{ name: "Category", value: "category" }, { name: "Name", value: "name" }]

    constructor(private productService: ProductService, private router: Router) { }


    ngOnInit() {
        this.productService.getProducts().subscribe(({ products }) => {
            this.productsData = products;
        })
    }

    searchProduct() {
        console.log(this.searchControl.value, this.selectControl.value);
        this.productService.searchProducts(this.searchControl.value, this.selectControl.value).subscribe(({ products }) => {
            this.productsData = products;
        })
    }

    logoutUser() {
        //localStorage.removeItem('token');
        //window.location.href = COGNITO_URL;
    }

    productDetail(product : any) {
      var id = product.id;
      this.router.navigate(['/products/', id]);
      console.log(product);
    }
}
