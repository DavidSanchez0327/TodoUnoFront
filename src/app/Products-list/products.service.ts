
import {IProducts} from './iProducts';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export class ProductsService {
  private sofkianosUrl = 'http://localhost:8080/api/v1/sofkianos';
  private ProductsService: ProductsService;
  private product: IProducts[];

  constructor(private http: HttpClient) { }

  getProduct(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.sofkianosUrl).pipe();
  }

  updateProduct(preducts: IProducts): Observable<IProducts> {
    return this.http.put<IProducts>(this.sofkianosUrl, preducts).pipe();
  }

  search(text: string) {
    return this.product.filter(iproduct => {
      const term = text.toLowerCase();
      return iproduct.nombreProducto.toLowerCase().includes(term),
        iproduct.categoria.toLowerCase().includes(term);
    });
  }
}
