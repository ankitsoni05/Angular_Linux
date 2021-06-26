import { AbstractControl, ValidationErrors } from '@angular/forms';

export class usernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { IsContainingSpace: true };
    }
    return null;
  }
}
