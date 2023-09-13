import {Component, inject, OnInit} from '@angular/core';
import {ColleagueService} from "../../../providers/colleague.service";
import {ColleagueDetails} from "../../../models/colleague-details";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'tc-colleague-details',
  templateUrl: './colleague-details.component.html',
  styleUrls: ['./colleague-details.component.scss']
})
export class ColleagueDetailsComponent implements OnInit {
  colleagueService = inject(ColleagueService);
  aRoute = inject(ActivatedRoute);

  pseudo = this.aRoute.snapshot.paramMap.get('pseudo') ?? '';
  colleague?: ColleagueDetails;

  ngOnInit() {
    console.log('pseudo : ', this.pseudo);
    this.colleagueService.getColleagueDetails(this.pseudo).subscribe(colleagueDetails => {
      this.colleague = colleagueDetails;
      console.log(this.colleague.photo);
    });
  }
}
