export interface IButton{
    size?: "large" | "middle" | "small"
    type: "button" | "submit",
    content: string,
    onClick?: () => void
}