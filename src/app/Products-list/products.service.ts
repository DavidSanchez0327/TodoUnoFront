
import {IProducts} from './iProducts';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private sofkianosUrl = 'http://localhost:8080/todoUno-ApiRest/api/productos';
  private productsService: ProductsService;
  private product: IProducts[];

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.sofkianosUrl).pipe();
  }

  create(product): Observable<IProducts> {
    return this.http.post<IProducts>(this.sofkianosUrl, product).pipe();
  }

  updateProduct(product: IProducts): Observable<IProducts> {
        return this.http.put<IProducts>(this.sofkianosUrl, product.id).pipe();
  }

  search(text: string) {
    return this.product.filter(iproduct => {
      const term = text.toLowerCase();
      return iproduct.nombreProducto.toLowerCase().includes(term),
        iproduct.categoria.toLowerCase().includes(term);
    });
  }

  deleteProduct(id: string): Observable<IProducts> {
    const url = `${this.sofkianosUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete<IProducts>(url ).pipe();
  }
}
