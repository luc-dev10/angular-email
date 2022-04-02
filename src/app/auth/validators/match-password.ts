import { Inject, Injectable } from '@angular/core';
import { Validator, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(formGroup: FormGroup): ValidationErrors | null {
    // check if two fields match
    const { password, passwordConfirmation } = formGroup.value;
    if (password !== passwordConfirmation) return { passwordNotMatch: true };

    return null;
  }
}
