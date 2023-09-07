import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ColleagueListComponent } from './colleague-list/colleague-list.component';
import { ColleagueComponent } from './colleague-list/colleague/colleague.component';
import { LikeHateComponent } from './colleague-list/colleague/like-hate/like-hate.component';
import { VotingHistoryComponent } from './voting-history/voting-history.component';
import { ScorePipe } from './pipes/score.pipe';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    ColleagueListComponent,
    ColleagueComponent,
    LikeHateComponent,
    VotingHistoryComponent,
    ScorePipe,
    CounterComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent
  ]
})
export class SharedModule { }
