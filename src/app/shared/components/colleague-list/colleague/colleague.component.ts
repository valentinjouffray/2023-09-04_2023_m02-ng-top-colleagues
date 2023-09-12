import {Component, inject, Input, OnInit} from '@angular/core';
import {Colleague} from "../../../../models/colleague";
import {VoteService} from "../../../../providers/vote.service";
import {LikeHate} from "../../../../models/like-hate";
import {Vote} from "../../../../models/vote";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {
  voteService = inject(VoteService);

  @Input() colleague: Colleague = {
    "pseudo": "undefined",
    "score": 0,
    "photo": "undefined"
  };
  isLikeEnabled: boolean = this.colleague.score < 1000;
  isHateEnabled: boolean = this.colleague.score > (-1000);

  ngOnInit() {
    this.checkScore();
  }

  vote(choice: LikeHate) {
    this.colleague.score += choice;
    this.checkScore();
    this.addVote(choice);
  }

  private checkScore() {
    this.isLikeEnabled = this.colleague.score < 1000;
    // if (this.colleague.score > 1000) this.colleague.score = 1000;
    this.isHateEnabled = this.colleague.score > (-1000);
    // if (this.colleague.score < -1000) this.colleague.score = -1000;
  }

  addVote(choice: LikeHate) {
    const duplicateColleague = {...this.colleague};
    const voteToAdd: Vote = {
      colleague: duplicateColleague,
      vote: choice
    }
    this.voteService.addVote(voteToAdd).subscribe(
        (response) => {
          console.log('Post réussi', response);
          this.voteService.newVote$.next(voteToAdd);
        },
        (error) => {
          console.log('Échec de vote', error);
        }
    );
  }
}
