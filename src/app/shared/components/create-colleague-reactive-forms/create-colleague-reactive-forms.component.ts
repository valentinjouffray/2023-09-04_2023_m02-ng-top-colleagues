import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {PseudoValidatorDirective} from "../../validators/pseudo-validator.directive";
import {FirstLastValidatorDirective} from "../../validators/first-last-validator.directive";

import {ColleagueDetails} from "../../../models/colleague-details";
import {ColleagueService} from "../../../providers/colleague.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent {
  router = inject(Router);
  fb = inject(FormBuilder);
  colleagueService = inject(ColleagueService);

  validatorPseudo = new PseudoValidatorDirective();
  validatorFirstLast = new FirstLastValidatorDirective();
  vForm: FormGroup = this.fb.group({
    pseudo: ['', {validators: [Validators.required], asyncValidators: [this.validatorPseudo.validate.bind(this)]}],
    last: ['', [Validators.required, Validators.minLength(2)]],
    first: ['', [Validators.required, Validators.minLength(2)]],
    photo: ['', [Validators.required]]
  },
    {validators: [this.validatorFirstLast.validate.bind(this)]}
  );

  addColleague() {
    const formData = this.vForm.value;
    let colleague: ColleagueDetails = {
      pseudo: formData.pseudo,
      firstName: formData.first,
      lastName: formData.last,
      score: 100,
      photoUrl: formData.photo
    }
    this.colleagueService.addColleague(colleague).subscribe(response => {
      console.log(response);
      this.router.navigate(['/colleagues']).then();
    });
  }
  get pseudoErr() {
    const pseudoCtrl = this.vForm.get('pseudo');
    return pseudoCtrl && pseudoCtrl.dirty && pseudoCtrl.invalid;
  }
}
