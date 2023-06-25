import React from "react"

interface IButton {
    children: string
}

export const Button: React.FC<IButton> = ({children}) => {
    return (<>{children}</>)
}