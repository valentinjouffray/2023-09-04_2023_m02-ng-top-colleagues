import {Directive, inject} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {catchError, debounceTime, distinctUntilChanged, map, Observable, of} from "rxjs";
import {ColleagueService} from "../../providers/colleague.service";

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]
})
export class PseudoValidatorDirective implements AsyncValidator {
  colleagueService = inject(ColleagueService);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const pseudo: string = control.value;
    console.log(pseudo);
    return this.colleagueService.getColleagueDetails(pseudo).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(() => {
        return {pseudo: 'pseudo existe déjà'};
      }),
      catchError(() => of(null))
    );
  }
}
