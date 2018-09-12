export interface FieldsOptions{
  [fields: string] : {
    id: string,
    label: string,
    validationMessage? : {
      [error: string]: any
    }
  }
}
