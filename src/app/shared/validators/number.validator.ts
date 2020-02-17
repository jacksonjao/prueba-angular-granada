import {AbstractControl} from '@angular/forms';

export class NumberOnly {
  private static reg =   /^[0-9]+(\.?[0-9]+)?$/;
  static validator(control: AbstractControl) {
    const val = control.value;
    let isValid = true;
    if (val === null) {
      return null;
    } else if (val.toString()[0] === ' ' || !val.toString().match(NumberOnly.reg)) {
      control.setValue(null);
      isValid = false;
    }
    return isValid ? null : { isNotNumber: true };
  }
}
