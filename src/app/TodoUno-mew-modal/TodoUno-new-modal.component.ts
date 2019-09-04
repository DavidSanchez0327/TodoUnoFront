import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {IProducts} from '../products-list/iProducts';
import {Observable} from 'rxjs';
import {ProductsService} from '../products-list/products.service';

@Component({
  selector: 'app-product-new-modal',
  templateUrl: './TodoUno-new-modal.component.html',
  styleUrls: ['./TodoUno-new-modal.component.css']
})
export class TodoUnoNewModalComponent implements OnInit {
  product: IProducts;
  filterProduct: Observable<IProducts[]>;
  products: IProducts[] = [];

  constructor(public activeModal: NgbActiveModal, private productsService: ProductsService) { }

  ngOnInit() {
  }
  add(product: IProducts) {
    this.productsService.create(product).subscribe(products => this.products.push(product));
  }
}
