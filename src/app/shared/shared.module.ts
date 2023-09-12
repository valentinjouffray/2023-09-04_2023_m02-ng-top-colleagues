import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ColleagueListComponent } from './colleague-list/colleague-list.component';
import { ColleagueComponent } from './colleague-list/colleague/colleague.component';
import { LikeHateComponent } from './colleague-list/colleague/like-hate/like-hate.component';
import { VotingHistoryComponent } from './voting-history/voting-history.component';
import { ScorePipe } from './pipes/score.pipe';
import { CounterComponent } from './counter/counter.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateColleagueFormsComponent } from './create-colleague-forms/create-colleague-forms.component';
import {FormsModule} from "@angular/forms";
import { FirstLastValidatorDirective } from './validators/first-last-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';
import { CreateColleagueReactiveFormsComponent } from './components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';



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
    CreateColleagueReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    CreateColleagueReactiveFormsComponent
  ]
})
export class SharedModule { }
