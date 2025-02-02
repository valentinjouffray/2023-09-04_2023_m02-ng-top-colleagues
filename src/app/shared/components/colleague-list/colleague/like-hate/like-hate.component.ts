import {Component, Output, EventEmitter, Input} from '@angular/core';
import {LikeHate} from "../../../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Output() choice = new EventEmitter<LikeHate>();
  @Input() isLikeEnabled!: boolean;
  @Input() isHateEnabled!: boolean;

  likeVote = LikeHate.LIKE;
  hateVote = LikeHate.HATE;

  vote(value: LikeHate) {
    this.choice.emit(value);
  }
}
