import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {VoteService} from "../../providers/vote.service";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  voteService = inject(VoteService);

  likes = 0;
  hates = 0;

  ngOnInit() {
    this.voteService.subscribeToLikeCounter().subscribe(like => {
      this.likes = like;
    })
    this.voteService.subscribeToHateCounter().subscribe(hate => {
      this.hates = hate;
    })
  }

  ngOnDestroy() {
    this.voteService.unsubscribeToLikeCounter();
    this.voteService.unsubscribeToHateCounter();
  }
}
