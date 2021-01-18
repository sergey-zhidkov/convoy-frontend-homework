import React from "react"
import styles from "./Shell.module.scss"
import { Switch, Route } from "react-router-dom"
import { NoMatch } from "./NoMatch"
import { buildClassName } from "../../utils/utils"
import { Footer } from "../../shared/footer/Footer"
import { Header } from "../../shared/header/Header"
import { Offers } from "../offers/Offers"

interface ShellProps {
    className?: string
}

export function Shell({ className }: ShellProps): JSX.Element {
    const renderRouters = (): JSX.Element => {
        return (
            <Switch>
                <Route exact={true} path={"/"} render={(props) => <Offers {...props} />} />
                <Route component={NoMatch} />
            </Switch>
        )
    }

    return (
        <div className={buildClassName("Shell", styles.Shell, className)}>
            <Header />
            {renderRouters()}
            <Footer />
        </div>
    )
}
