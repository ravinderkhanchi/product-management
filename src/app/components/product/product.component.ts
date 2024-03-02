import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    category = [{ name: "One", value: "1" }, { name: "Two", value: "2" }]

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
        localStorage.removeItem('token');
        window.location.href = "https://nagp.auth.ap-south-1.amazoncognito.com/logout?client_id=4rpandicearfs91f6t0nbpfmt&logout_uri=http%3A%2F%2Flocalhost%3A4200";
    }

    productDetail(product : any) {
      this.router.navigateByUrl(`/products/${product.id}`);
        console.log(product);
    }
}
