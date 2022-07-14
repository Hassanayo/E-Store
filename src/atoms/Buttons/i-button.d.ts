import { ButtonHTMLAttributes } from "react";
export interface ButtonProps  {
    variant?: "primary" | "secondary" | "callToAction"
    width?: string
    height?: string
    children: React.ReactNode
    className?: string
    onClick?: () => void
}