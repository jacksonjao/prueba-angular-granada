import {AbstractControl, FormControl} from '@angular/forms';

export  class NoWhiteSpace {
  static validator(control: FormControl) {
    const val = control.value;
    let isValid = true;
    if (val === null) {
      return null;
    } else if (val.toString()[0] === ' ') {
      control.setValue(null);
      isValid = false;
    }
    return isValid ? null : { whitespace: true };
  }
}

