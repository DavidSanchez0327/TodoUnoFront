import { Component, OnInit } from '@angular/core';

import { IProducts } from '../products-list/iProducts';

@Component({
  selector: 'app-todouno-details',
  templateUrl: './TodoUno-details.component.html',
  styleUrls: ['./TodoUno-details.component.css']
})
export class TodoUnoDetailsComponent implements OnInit {
  pageTitle = 'Informacion del producto';
  product: IProducts;

  constructor() { }

  ngOnInit() {
  }

}
