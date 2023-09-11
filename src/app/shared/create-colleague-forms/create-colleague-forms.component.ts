import { Component } from '@angular/core';
import {ColleagueDetails} from "../../models/colleague-details";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  colleague: ColleagueDetails = {
    pseudo: '',
    score: 0,
    photoUrl: '',
    firstName: '',
    lastName: ''
  }

  addColleague(colleague: ColleagueDetails) {
    console.log('Collègue: ', colleague);
    console.error("Method 'addColleague' not yet implemented");
  }
}
