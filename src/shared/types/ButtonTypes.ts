export interface IButton{
    size?: "large" | "middle" | "small"
    type: "button" | "submit" | "textarea",
    content: string,
    bgColor?: string,
    onClick?: () => void
}