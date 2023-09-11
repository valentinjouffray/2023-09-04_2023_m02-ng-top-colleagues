import {Component, inject} from '@angular/core';
import {ColleagueDetails} from "../../models/colleague-details";
import {ColleagueService} from "../../providers/colleague.service";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  colleagueService = inject(ColleagueService);

  colleague: ColleagueDetails = {
    pseudo: '',
    score: 0,
    photoUrl: '',
    firstName: '',
    lastName: ''
  }

  addColleague(colleague: ColleagueDetails) {
    this.colleagueService.addColleague(colleague).subscribe(response => {
      console.log(response);
    });
  }
}
