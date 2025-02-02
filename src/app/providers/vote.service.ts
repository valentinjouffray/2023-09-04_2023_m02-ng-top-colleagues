import {inject, Injectable} from '@angular/core';
import {Vote} from "../models/vote";
import {ColleagueService} from "./colleague.service";
import {Observable, ReplaySubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  colleagueService = inject(ColleagueService);
  http = inject(HttpClient);
  voteApiUrl: string = 'https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/votes';

  likeCounter$ = new Subject<number>();
  hateCounter$ = new Subject<number>();
  likes: number = 0;
  hates: number = 0;
  newVote$ = new ReplaySubject<Vote>();

  getVoteList(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.voteApiUrl);
  }

  addVote(vote: Vote) {
    let likeOrHate: string;
    (vote.vote > 0) ? likeOrHate = 'LIKE' : likeOrHate = 'HATE';
    return this.http.post(this.voteApiUrl, {
      "pseudo": vote.colleague.pseudo,
      "like_hate": likeOrHate
    });
  }

  // revokeVote(vote: Vote): boolean {
  //   const indexOfVote = this.votes.indexOf(vote);
  //   if (indexOfVote === -1) {
  //     return false
  //   }
  //   this.votes.splice(indexOfVote, 1);
  //   this.colleagueService.changeScore(vote.colleague.pseudo, vote.vote);
  //   return true;
  // }

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

  subscribeToNewVotes(): Observable<Vote> {
    return this.newVote$.asObservable();
  }

  unsubsscribeFromNewVotes() {
    this.newVote$.unsubscribe();
  }

}
