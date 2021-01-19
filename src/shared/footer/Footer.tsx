import React from "react"
import styles from "./Footer.module.scss"
import { buildClassName } from "../../utils/utils"

interface FooterProps {
    className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }): JSX.Element => {
    return <footer className={buildClassName("Footer", styles.Footer, className)}>Sergey's Homework</footer>
}
