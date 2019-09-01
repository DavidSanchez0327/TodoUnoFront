import { Component, OnInit } from '@angular/core';

import { IProducts } from '../Products-list/iProducts';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Products-list',
  templateUrl: './TodoUno-details.component.html',
  styleUrls: ['./TodoUno-details.component.css']
})
export class SofkianoDetailsComponent implements OnInit {
  pageTitle = 'Informacion del producto';
  product: IProducts;

  constructor() { }

  ngOnInit() {
  }

}
