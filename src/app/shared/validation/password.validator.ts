import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function mustContainDigit(regExp: RegExp): ValidatorFn {
    //the param of a RegExp must be given between // like: /example/

    return (control: AbstractControl): {[key: string]: boolean} | null => {
        //returns the object if there's an error in the validation
        //the key of the object is the name of the validation error
        //the value of the object is if there was an error
        //if the validation is ok, returns null

        const noDigit = control.value.toString().match(regExp);

        return noDigit ? null : {'noDigit': true};
    };
}

export function mustContainCapitalLetter(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        const noCapitalLetter = control.value.toString().match(regExp);

        return noCapitalLetter ? null : {'noCapitalLetter': true};
    };
}

export function mustContainSpecialCharacter(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        const noSpecialCharacter = control.value.toString().match(regExp);

        return noSpecialCharacter ? null : {'noSpecialCharacter': true};
    };
}

export function PasswordConfirmPasswordMatch(control: AbstractControl): {[key: string]: boolean} | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && (confirmPassword?.value !== password?.value) ? {'noMatch': true} : null;
}