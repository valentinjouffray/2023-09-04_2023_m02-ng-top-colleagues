import {inject, Injectable} from '@angular/core';
import {Vote} from "../models/vote";
import {ColleagueService} from "./colleague.service";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  colleagueService = inject(ColleagueService);

  likeCounter$ = new Subject<number>();
  hateCounter$ = new Subject<number>();
  likes: number = 0;
  hates: number = 0;

  votes: Vote[] = [
    // {
    //   colleague: {
    //     pseudo: "None",
    //     score: 100,
    //     photo: "none"
    //   },
    //   vote: LikeHate.LIKE
    // },
    // {
    //   colleague: {
    //     pseudo: "Nobody likes me",
    //     score: -500,
    //     photo: "none"
    //   },
    //   vote: LikeHate.HATE
    // }
  ];
  list(): Vote[] {
    return this.votes;
  }

  addVote(vote: Vote): boolean {
    const initialVoteLength = this.votes.length;
    const actualVoteLength = this.votes.unshift(vote);
    if (vote.vote > 0) {
      this.likes += 1;
      this.likeCounter$.next(this.likes);
    } else {
      this.hates += 1;
      this.hateCounter$.next(this.hates);
    }
    return ( actualVoteLength > initialVoteLength);
  }

  revokeVote(vote: Vote): boolean {
    const indexOfVote = this.votes.indexOf(vote);
    if (indexOfVote === -1) {
      return false
    }
    this.votes.splice(indexOfVote, 1);
    this.colleagueService.changeScore(vote.colleague.pseudo, vote.vote);
    return true;
  }

  subscribeToLikeCounter(): Observable<number> {
    return this.likeCounter$.asObservable();
  }

  unsubscribeToLikeCounter() {
    this.likeCounter$.unsubscribe();
  }

  subscribeToHateCounter(): Observable<number> {
    return this.hateCounter$.asObservable();
  }

  unsubscribeToHateCounter() {
    this.hateCounter$.unsubscribe();
  }

}
