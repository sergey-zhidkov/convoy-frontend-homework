import React from "react"
import styles from "./Content.module.scss"
import { buildClassName } from "../../utils/utils"

interface HeaderProps {
    className?: string
}

export const Content: React.FC<HeaderProps> = ({ className }): JSX.Element => {
    return <div className={buildClassName("Content", styles.Content, className)}>Content here</div>
}
