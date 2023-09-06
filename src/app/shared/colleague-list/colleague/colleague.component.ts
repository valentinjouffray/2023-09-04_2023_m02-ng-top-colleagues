import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague: Colleague = {
    "pseudo": "undefined",
    "score": 100,
    "photo": "undefined"
  };
  isLikeEnabled: boolean = this.colleague.score < 1000;
  isHateEnabled: boolean = this.colleague.score > (-1000);

  vote(choice: number) {
    this.colleague.score += choice;
    this.checkScore();
  }

  private checkScore() {
    this.isLikeEnabled = this.colleague.score < 1000;
    this.isHateEnabled = this.colleague.score > (-1000);
  }
}
