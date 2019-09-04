import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoUnoDetailsComponent} from './TodoUno-details/TodoUno-details.component';
import {ProductsListComponent} from './products-list/products-list.component';


const routes: Routes = [
  { path: 'productos', component: ProductsListComponent},
  { path: 'productos/:id', component: TodoUnoDetailsComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full'},
  { path: '**', redirectTo: 'productos', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
