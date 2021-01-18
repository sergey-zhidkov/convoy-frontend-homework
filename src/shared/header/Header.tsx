import React from "react"
import styles from "./Header.module.scss"
import { buildClassName } from "../../utils/utils"
import { NavBar } from "./components/NavBar"
import { ReactComponent as LogoSvg } from "../../images/convoy-logo.svg"

interface HeaderProps {
    className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }): JSX.Element => {
    const renderLogo = (): JSX.Element | null => (
        <div className={styles.logo}>
            <LogoSvg />
        </div>
    )

    return (
        <header className={buildClassName("Header", styles.Header, className)}>
            {renderLogo()}
            <NavBar />
        </header>
    )
}
