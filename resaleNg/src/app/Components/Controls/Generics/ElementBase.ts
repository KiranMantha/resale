import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValueAccessorBase } from './ValueAccessorBase';
import {
    AsyncValidatorArray,
    ValidatorArray,
    ValidationResult,
    message,
    validate,
} from './Validate';


export abstract class ElementBase<T> extends ValueAccessorBase<T> {
    protected abstract model: NgModel;

    // we will ultimately get these arguments from @Inject on the derived class
    constructor(private validators: ValidatorArray,
        private asyncValidators: AsyncValidatorArray,
    ) {
        super();
    }


    protected validate(): Observable<ValidationResult> {
        return validate
            (this.validators, this.asyncValidators)
            (this.model.control);
    }


    protected get invalid(): Observable<boolean> {
        return this.validate().map(v => Object.keys(v || {}).length > 0);
    }


    protected get failures(): Observable<Array<string>> {
        return this.validate().map(v => Object.keys(v).map(k => message(v, k)));
    }
}