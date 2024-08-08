export interface IInput{
    placeholder?: string,
    name?: string,
    type: string
    label?: string,
    isSmall?: boolean,
    inputType?: "input" | "textarea" | "select"
    selectList?: string[],
    selectValue?: string
}