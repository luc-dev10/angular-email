import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export const MatchPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirmation = control.get('passwordConfirmation');

  return password?.value !== passwordConfirmation?.value
    ? { passwordNotMatching: true }
    : null;
};
