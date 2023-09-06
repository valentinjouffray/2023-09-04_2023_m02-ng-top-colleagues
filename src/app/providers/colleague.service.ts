import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  list(): Colleague[] {
    return [
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
  }
}
