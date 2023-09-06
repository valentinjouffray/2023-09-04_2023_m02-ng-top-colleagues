import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ColleagueListComponent } from './colleague-list/colleague-list.component';
import { ColleagueComponent } from './colleague-list/colleague/colleague.component';
import { LikeHateComponent } from './colleague-list/colleague/like-hate/like-hate.component';
import { VotingHistoryComponent } from './voting-history/voting-history.component';
import { ScorePipe } from './pipes/score.pipe';



@NgModule({
  declarations: [
    ColleagueListComponent,
    ColleagueComponent,
    LikeHateComponent,
    VotingHistoryComponent,
    ScorePipe
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    ColleagueListComponent,
    VotingHistoryComponent
  ]
})
export class SharedModule { }
