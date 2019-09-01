import { Component, OnInit } from '@angular/core';

import { iSofkiano } from '../sofkiano-list/iSofkiano';

@Component({
  selector: 'app-sofkiano-details',
  templateUrl: './TodoUno-details.component.html',
  styleUrls: ['./TodoUno-details.component.css']
})
export class SofkianoDetailsComponent implements OnInit {
  pageTitle = 'Información del Sofkiano';
  sofkiano: iSofkiano;

  constructor() { }

  ngOnInit() {
  }

}
