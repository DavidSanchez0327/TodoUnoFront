import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductsListComponent} from './Products-list/products-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SofkianoDetailsComponent} from './TodoUno-details/TodoUno-details.component';
import {TodoUnoNewModalComponent} from './TodoUno-mew-modal/TodoUno-new-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModalModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    SofkianoDetailsComponent,
    TodoUnoNewModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    NgbTypeaheadModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    TodoUnoNewModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
