import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CommentsValidator {
  static haveLengthof15(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).length < 15) {
      return {
        HaveLengthIssue: true,
        CurrentLength: (control.value as string).length,
        requiredLength: 15,
      };
    }
    return null;
  }
}
