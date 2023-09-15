import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomePageComponent} from "./pages/welcome/welcome-page/welcome-page.component";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague/create-colleague.page";
import {CreateColleagueReactivePage} from "./pages/create-colleague-reactive/create-colleague-reactive.page";
import {DisplayColleagueDetailsPage} from "./pages/display-colleague-details/display-colleague-details.page";
import {authGuard} from "./guard/auth.guard";

const routes = [
  {
    path: 'colleagues/:pseudo',
    canActivate: [authGuard],
    component: DisplayColleagueDetailsPage},
  {
    path: 'colleagues',
    canActivate: [authGuard],
    component: WelcomePageComponent, title: 'Accueil'
  },
  {
    path: 'template-form',
    canActivate: [authGuard],
    component: CreateColleaguePage,
    title: 'Créer un collègue en template driven'
  },
  {
    path: 'reactive-form',
    canActivate: [authGuard],
    component: CreateColleagueReactivePage,
    title: 'Créer un collègue en code driven'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
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
