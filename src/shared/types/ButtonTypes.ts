export interface IButton{
    type: "button" | "submit",
    content: string,
    onClick?: () => void
}