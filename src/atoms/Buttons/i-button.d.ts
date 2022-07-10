import { ButtonHTMLAttributes } from "react";
export interface ButtonProps  {
    variant?: "primary" | "secondary" | "callToAction"
    size?: "small" | "regular"
    children: React.ReactNode
}