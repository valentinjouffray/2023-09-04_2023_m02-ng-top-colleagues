import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Vote} from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit, OnDestroy {
  voteService = inject(VoteService);

  votes: Vote[] = [];

  subVote!: Subscription;

  ngOnInit() {
    this.getVoteList();
  }

  private getVoteList() {
    this.voteService.getVoteList().subscribe((votes: Vote[]) => {
      this.votes = votes;
      this.subVote = this.voteService.subscribeToNewVotes().subscribe((vote: Vote) => this.votes.unshift(vote));
    });
  }

  ngOnDestroy() {
    this.subVote.unsubscribe();
  }

  voteRemark(voteValue: number): string {
    if (voteValue > 0) {
      return `aimé(e)`;
    } else {
      return 'détesté(e)';
    }
  }

  deleteVote(vote: Vote) {
    const indexOfVote = this.votes.indexOf(vote);
    if (indexOfVote !== -1) {
      this.votes.splice(indexOfVote, 1);
    }
  }
}
