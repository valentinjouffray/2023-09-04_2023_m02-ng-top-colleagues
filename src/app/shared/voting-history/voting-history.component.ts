import {Component, inject, OnInit} from '@angular/core';
import {Vote} from "../../models/vote";
import {VoteService} from "../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {
  voteService = inject(VoteService);

  votes: Vote[] = [];

  ngOnInit() {
    this.voteService.getVoteList().subscribe((votes: Vote[]) => {
      this.votes = votes;
      this.voteService.subscribeToNewVotes().subscribe((vote: Vote) => this.votes.push(vote));
    });
  }

  // addVote(vote: Vote) {
  //   this.votes?.push(vote);
  // }

  // deleteVote(vote: Vote) {
  //   // const voteToRemove = this.votes.indexOf(vote);
  //   // if (voteToRemove !== -1) this.votes.splice(voteToRemove, 1);
  //   this.voteService.revokeVote(vote);
  // }

  voteRemark(voteValue: number): string {
    if (voteValue > 0) {
      return `aimé(e)`;
    } else {
      return 'détesté(e)';
    }
  }
}
