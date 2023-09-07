import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

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

  changeScore(pseudo: string, scoreToDeduct: number) {
    let indexOfColleague = -1;
    let currentIndex = 0;
    this.colleagues.forEach(colleague => {
      colleague.pseudo === pseudo ? indexOfColleague = currentIndex : currentIndex += 1;
    })
    this.colleagues[indexOfColleague].score -= scoreToDeduct;
  }
}
