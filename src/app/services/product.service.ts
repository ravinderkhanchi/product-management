import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return of({
      products: [
        {
          name: 'Nike- Shoes',
          price: '2200',
          priceWithDiscount: '2000',
          category: 'Shoes',
          id: 'PD1234',
          imageUrl: 'https://source.unsplash.com/random/200x200?sig=2',
        },
        {
          name: 'Puma- Shoes',
          price: '2200',
          priceWithDiscount: '2000',
          category: 'Shoes',
          id: 'PD1244',
          imageUrl: 'https://source.unsplash.com/random/200x200?sig=1',
        },
      ],
    });
    // return this.httpClient.get("http://localhost:4200/test");
  }

  searchProducts(searchValue: any, selectedCategory: any): Observable<any> {
    let params = new HttpParams()
      .set('searchValue', searchValue)
      .set('selectedCategory', selectedCategory);
    return this.httpClient.get(`http://localhost:4200/test?`, { params });
  }

  getProductDetail(productId: any): Observable<any> {
    return of({
      name: 'Nike- Shoes',
      price: '2200',
      priceWithDiscount: '2000',
      category: 'Shoes',
      id: 'PD1234',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=2',
    });
    return this.httpClient.get(
      `http://localhost:4200/test?productId=${productId}`
    );
  }
}
