import {Component} from '@angular/core';
import {Vote} from "../../models/vote";
import {LikeHate} from "../../models/like-hate";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  votes: Vote[] = [
    {
      colleague: {
        pseudo: "None",
        score: 100,
        photo: "none"
      },
      vote: LikeHate.LIKE
    },
    {
      colleague: {
        pseudo: "Nobody likes me",
        score: -500,
        photo: "none"
      },
      vote: LikeHate.HATE
    }
  ];

  addVote(vote: Vote) {
    this.votes?.push(vote);
  }
}
