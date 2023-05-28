import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {FilmPageComponent} from "./components/film-page/film-page.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'film/:id',
    component: FilmPageComponent,
  },
  { path: '**',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
