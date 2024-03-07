import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

var url = 'https://8xwda4hwlc.execute-api.ap-south-1.amazonaws.com/dev/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    of({
      "products": [{
        "name": "Nike- Shoes",
        "price": "2200",
        "discountedPrice": "2000",
        "category": "Shoes",
        "id": "PD1234",
        "imageUrl": "https://source.unsplash.com/random/200x200?sig=2"
      }, {
        "name": "Puma- Shoes",
        "price": "2200",
        "discountedPrice": "2000",
        "category": "Shoes",
        "id": "PD1244",
        "imageUrl": "https://source.unsplash.com/random/200x200?sig=1"
      }]
    });
    return this.httpClient.get(url);
  }

  searchProducts(searchValue: any, selectedCategory: any): Observable<any> {
    let params = new HttpParams().set("value", searchValue).set("key", selectedCategory);
    return this.httpClient.get(url + `/search?`, { params });
  }

  getProductDetail(productId: any): Observable<any> {
    of({
      name: 'Nike- Shoes',
      price: '2200',
      discountedPrice: '2000',
      category: 'Shoes',
      id: 'PD1234',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=2',
    });
    return this.httpClient.get(
      url + `/${productId}`
    );
  }
}
