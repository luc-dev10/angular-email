import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  // validate method
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.authService.userNameAvailable(control.value).pipe(
      map((value) => {
        return value.available ? { nonUniqueName: true } : null;
      }),
      catchError((err) => {
        if (err.error.username) return of({ nonUniqueName: true });
        else return of({ badConnection: true });
      })
    );
  }
}
