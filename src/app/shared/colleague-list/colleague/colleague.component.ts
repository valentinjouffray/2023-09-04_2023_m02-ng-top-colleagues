import {Component, inject, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {VoteService} from "../../../providers/vote.service";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  voteService = inject(VoteService);

  @Input() colleague: Colleague = {
    "pseudo": "undefined",
    "score": 100,
    "photo": "undefined"
  };
  isLikeEnabled: boolean = this.colleague.score < 1000;
  isHateEnabled: boolean = this.colleague.score > (-1000);

  vote(choice: LikeHate) {
    this.colleague.score += choice;
    this.checkScore();
    this.addVote(choice);
  }

  private checkScore() {
    this.isLikeEnabled = this.colleague.score < 1000;
    if (this.colleague.score > 1000) this.colleague.score = 1000;
    this.isHateEnabled = this.colleague.score > (-1000);
    if (this.colleague.score < -1000) this.colleague.score = -1000;
  }

  addVote(choice: LikeHate): boolean {
    const duplicateColleague = {...this.colleague};
    return this.voteService.addVote({
      colleague: duplicateColleague,
      vote: choice
    });
  }
}
