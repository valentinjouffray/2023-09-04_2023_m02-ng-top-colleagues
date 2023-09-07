import {Component, inject, OnInit} from '@angular/core';
import {Colleague} from "../../models/colleague";
import {ColleagueService} from "../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {
  colleagueService = inject(ColleagueService);

  colleagues: Colleague[] = this.colleagueService.list();

  ngOnInit() {
    this.colleagueService.getColleagueList().subscribe(colleagues => {
      this.colleagues = colleagues;
    })
  }
}
