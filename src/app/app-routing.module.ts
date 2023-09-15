import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomePageComponent} from "./pages/welcome/welcome-page/welcome-page.component";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague/create-colleague.page";
import {CreateColleagueReactivePage} from "./pages/create-colleague-reactive/create-colleague-reactive.page";
import {DisplayColleagueDetailsPage} from "./pages/display-colleague-details/display-colleague-details.page";
import {LoginRoutingModule} from "./pages/login/login-routing.module";

const routes = [
  { path: 'colleagues/:pseudo', component: DisplayColleagueDetailsPage},
  { path: 'colleagues', component: WelcomePageComponent, title: 'Accueil'},
  { path: 'template-form', component: CreateColleaguePage, title: 'Créer un collègue en template driven'},
  { path: 'reactive-form', component: CreateColleagueReactivePage, title: 'Créer un collègue en code driven'},
  // { path: '', pathMatch: 'full', redirectTo: '/colleagues'},
  { path: '', loadChildren: LoginRoutingModule},
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
