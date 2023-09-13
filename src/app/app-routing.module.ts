import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomePageComponent} from "./pages/welcome/welcome-page/welcome-page.component";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague/create-colleague.page";
import {CreateColleagueReactivePage} from "./pages/create-colleague-reactive/create-colleague-reactive.page";

const routes = [
  { path: 'colleagues', component: WelcomePageComponent, title: 'Accueil'},
  { path: 'colleagues/:pseudo', component: WelcomePageComponent},
  { path: 'template-form', component: CreateColleaguePage, title: 'Créer un collègue en template driven'},
  { path: 'reactive-form', component: CreateColleagueReactivePage, title: 'Créer un collègue en code driven'},
  { path: '', pathMatch: 'full', redirectTo: '/colleagues'},
] as Routes

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
