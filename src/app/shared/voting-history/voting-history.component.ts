import {Component, inject} from '@angular/core';
import {Vote} from "../../models/vote";
import {VoteService} from "../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  voteService = inject(VoteService);

  votes: Vote[] = this.voteService.list();

  // addVote(vote: Vote) {
  //   this.votes?.push(vote);
  // }

  deleteVote(vote: Vote) {
    const voteToRemove = this.votes.indexOf(vote);
    if (voteToRemove !== -1) this.votes.splice(voteToRemove, 1);
  }
}
