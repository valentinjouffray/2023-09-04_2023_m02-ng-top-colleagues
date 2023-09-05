import {Component, Output, EventEmitter} from '@angular/core';
import {LikeHate} from "../../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Output() choice = new EventEmitter<LikeHate>();

  likeVote = LikeHate.LIKE;
  hateVote = LikeHate.HATE;

  vote(value: number) {
    this.choice.emit(value);
  }
}
