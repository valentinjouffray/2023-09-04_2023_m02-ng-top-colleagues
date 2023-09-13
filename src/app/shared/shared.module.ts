import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColleagueListComponent} from './components/colleague-list/colleague-list.component';
import {ColleagueComponent} from './components/colleague-list/colleague/colleague.component';
import {LikeHateComponent} from './components/colleague-list/colleague/like-hate/like-hate.component';
import {VotingHistoryComponent} from './components/voting-history/voting-history.component';
import {ScorePipe} from './components/pipes/score.pipe';
import {CounterComponent} from './components/counter/counter.component';
import {HttpClientModule} from "@angular/common/http";
import {CreateColleagueFormsComponent} from './components/create-colleague-forms/create-colleague-forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FirstLastValidatorDirective} from './validators/first-last-validator.directive';
import {PseudoValidatorDirective} from './validators/pseudo-validator.directive';
import {
  CreateColleagueReactiveFormsComponent
} from './components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';
import {MenuComponentComponent} from './components/menu-component/menu-component.component';
import {RouterModule} from "@angular/router";
import { ColleagueDetailsComponent } from './components/colleague-details/colleague-details.component';


@NgModule({
  declarations: [
    ColleagueListComponent,
    ColleagueComponent,
    LikeHateComponent,
    VotingHistoryComponent,
    ScorePipe,
    CounterComponent,
    CreateColleagueFormsComponent,
    FirstLastValidatorDirective,
    PseudoValidatorDirective,
    CreateColleagueReactiveFormsComponent,
    MenuComponentComponent,
    ColleagueDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    CreateColleagueReactiveFormsComponent,
    MenuComponentComponent,
    ColleagueDetailsComponent
  ]
})
export class SharedModule { }
