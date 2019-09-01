import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {iSofkiano} from 'src/app/sofkiano-list/iSofkiano.js';
import {SofkianoService} from 'src/app/sofkiano-list/sofkiano.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sofkiano-new-modal',
  templateUrl: './sofkiano-new-modal.component.html',
  styleUrls: ['./TodoUno-new-modal.component.css']
})
export class TodoUnoNewModalComponent implements OnInit {
  sofkiano: iSofkiano;
  filterSofkiano: Observable<iSofkiano[]>;
  sofkianos: iSofkiano[] = [];

  constructor(public activeModal: NgbActiveModal, private sofkianoService: SofkianoService) { }

  ngOnInit() {
  }
  add(sofkiano: iSofkiano) {
    this.sofkianoService.postSofkiano(sofkiano).subscribe(sofkianos => this.sofkianos.push(sofkiano));
  }
}
