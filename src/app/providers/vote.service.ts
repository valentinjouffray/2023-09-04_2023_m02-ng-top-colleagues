import {inject, Injectable} from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {ColleagueService} from "./colleague.service";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  colleagueService = inject(ColleagueService);

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
  list(): Vote[] {
    return this.votes;
  }

  addVote(vote: Vote): boolean {
    const initialVoteLength = this.votes.length;
    const actualVoteLength = this.votes.unshift(vote);
    return ( actualVoteLength > initialVoteLength);
  }

  revokeVote(vote: Vote): boolean {
    const indexOfVote = this.votes.indexOf(vote);
    if (indexOfVote === -1) {
      return false
    }
    this.votes.splice(indexOfVote, 1);
    this.colleagueService.changeScore(vote);
    return true;
  }
}
