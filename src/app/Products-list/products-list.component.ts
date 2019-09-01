import {Component, OnInit} from '@angular/core';
import {IProducts} from './iProducts';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe} from '@angular/common';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {ProductsService} from './products.service';
import {TodoUnoNewModalComponent} from '../TodoUno-mew-modal/TodoUno-new-modal.component';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [DecimalPipe]


})

export  class ProductsListComponent implements  OnInit {

  title = 'products';
  products: IProducts[] = [];
  errorMessage: string;
  product: IProducts;
  filter = new FormControl('');
  filterProduct: Observable<IProducts[]>;

  constructor(private productsService: ProductsService, private modalService: NgbModal) {
  }
  ngOnInit() {
    this.productsService.getProduct().subscribe(
      products => this.products = products,
      error => this.errorMessage = error
    );


  }


  update(product: IProducts) {
    this.productsService.updateProduct(product).subscribe();
  }


  openModal() {
    const MODALREF = this.modalService.open(TodoUnoNewModalComponent);
  }

  searchByName(pipe: DecimalPipe) {
    this.filterProduct = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.productsService.search(text))
    );
  }

}
