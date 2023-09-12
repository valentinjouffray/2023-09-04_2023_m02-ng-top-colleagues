import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective, multi: true}]
})
export class FirstLastValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const first = control.get('first');
    let last = control.get('last');
    if (!last?.pristine && !first?.pristine) return last?.value === first?.value ? {firstLast: 'Le prénom doit être différent du nom'} : null;
    return null
  }
}
