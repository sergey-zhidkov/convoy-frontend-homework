import React from "react"
import styles from "./NavBar.module.scss"
import { buildClassName } from "../../../utils/utils"

interface NavBarProps {
    className?: string
}

export const NavBar: React.FC<NavBarProps> = ({ className }): JSX.Element => {
    return (
        <nav className={buildClassName("NavBar", styles.NavBar, className)} role="navigator">
            <ul className={styles.navigationContainer} aria-label="Main website navigation">
                <li className={buildClassName(styles.active, styles.link)}>Offers</li>
                <li className={styles.link}>My Jobs</li>
            </ul>
        </nav>
    )
}
