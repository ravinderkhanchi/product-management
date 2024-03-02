import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

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
    this.activatedRoute.queryParamMap.subscribe(params => {
      const productId = params.get("id");
      this.productService.getProductDetail(productId).subscribe((product: any) => {
        console.log(product);
        this.product = product;
      })
    })
  }

  logoutUser() {
    localStorage.removeItem('token');
    window.location.href = "https://nagp.auth.ap-south-1.amazoncognito.com/logout?client_id=4rpandicearfs91f6t0nbpfmt&logout_uri=http%3A%2F%2Flocalhost%3A4200";
}
}
