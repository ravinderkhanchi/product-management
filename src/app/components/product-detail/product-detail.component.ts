import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { COGNITO_URL } from '../../constant/app-constants';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any = {};

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const productId = params["id"];
      this.productService.getProductDetail(productId).subscribe((product: any) => {
        console.log(product);
        this.product = product;
      })
    })
  }

  logoutUser() {
    //localStorage.removeItem('token');
    window.location.href = COGNITO_URL;
}
}
