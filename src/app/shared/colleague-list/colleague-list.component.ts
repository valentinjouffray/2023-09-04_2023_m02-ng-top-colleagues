import { Component } from '@angular/core';
import {Colleague} from "../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
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
}
