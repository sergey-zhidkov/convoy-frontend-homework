import React from "react"
import { Offer } from "../../../types/types"
import { buildClassName, milesToLocale, moneyToUSD } from "../../../utils/utils"
import styles from "./OfferEntry.module.scss"

interface OfferEntryProps {
    className?: string
    offer: Offer
}

export const OfferEntry: React.FC<OfferEntryProps> = ({ className, offer }): JSX.Element => {
    const renderRequestStatus = (): JSX.Element => {
        return <div className={styles.requestStatus}>Requested</div>
    }

    const renderRoute = (): JSX.Element => {
        return <div className={styles.route}>Route</div>
    }

    const renderTime = (): JSX.Element => {
        return <div className={styles.route}>Some time</div>
    }

    const renderMileage = (): JSX.Element => {
        return <div className={styles.mileage}>{milesToLocale(offer.miles)}</div>
    }

    const renderPayment = (): JSX.Element => {
        return <div className={styles.payment}>{moneyToUSD(offer.offer)}</div>
    }

    return (
        <div className={buildClassName("OfferEntry", styles.OfferEntry, className)}>
            {renderRequestStatus()}
            <div className={styles.contentContainer}>
                {renderRoute()}
                {renderTime()}
                {renderMileage()}
                {renderPayment()}
            </div>
        </div>
    )
}
