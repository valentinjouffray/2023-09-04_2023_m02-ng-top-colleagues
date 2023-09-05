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
      "pseudo": 'none',
      "score": 100,
      "photo": 'https://sample-photo.com'
    },
    {
      "pseudo": 'valentin',
      "score": 500,
      "photo": 'https://sample-photo.com'
    }
  ]
}
