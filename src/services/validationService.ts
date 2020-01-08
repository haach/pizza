export const required = (value: any) => (value ? undefined : "Required");
export const mustBeNumber = (value: any) =>
  isNaN(value) ? "Must be a number" : undefined;
export const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
