import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {Vote} from "../models/vote";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  colleagues: Colleague[] = [
    {
      "pseudo": 'public enemy no1',
      "score": -1000,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    },
    {
      "pseudo": 'valentin',
      "score": 500,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    },
    {
      "pseudo": 'IDK',
      "score": 900,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    },
    {
      "pseudo": 'OK',
      "score": -900,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    },
    {
      "pseudo": 'IDK',
      "score": 100,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    },
    {
      "pseudo": 'IDK',
      "score": 100,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    },
    {
      "pseudo": 'IDK',
      "score": 100,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    },
    {
      "pseudo": 'IDK',
      "score": 100,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    },
    {
      "pseudo": 'IDK',
      "score": 100,
      "photo": 'https://freesvg.org/img/abstract-user-flat-4.png'
    }
  ]
  list(): Colleague[] {
    return this.colleagues;
  }

  changeScore(vote: Vote) {
    const indexOfColleague = this.colleagues.indexOf(vote.colleague);
    this.colleagues[indexOfColleague].score += -(vote.vote);
  }
}
