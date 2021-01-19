import React from "react"
import { Offer, TimeInterval } from "../../../types/types"
import { buildClassName, milesToLocale, moneyToUSD } from "../../../utils/utils"
import styles from "./OfferEntry.module.scss"

interface OfferEntryProps {
    className?: string
    offer: Offer
}

export const OfferEntry: React.FC<OfferEntryProps> = ({ className, offer }): JSX.Element => {
    const renderRequestStatus = (): JSX.Element | null => {
        if (!offer.isRequested) {
            return null
        }
        return <div className={styles.requestStatus}>Requested</div>
    }

    const renderRoute = (): JSX.Element => {
        return (
            <div className={styles.route}>
                <div>
                    <div className={buildClassName(styles.circle, styles.first)}></div>
                    {renderLocation(offer.origin.city, offer.origin.state, offer.origin.pickup, styles.origin)}
                </div>
                <div>
                    <div className={buildClassName(styles.circle, styles.last)}></div>
                    {renderLocation(
                        offer.destination.city,
                        offer.destination.state,
                        offer.destination.dropoff,
                        styles.destination
                    )}
                </div>
            </div>
        )
    }

    const renderLocation = (city: string, state: string, interval: TimeInterval, className?: string): JSX.Element => (
        <div className={buildClassName(className, styles.locationContainer)}>
            <span className={styles.location}>
                {city}, {state}
            </span>
            <span className={styles.timeInterval}>
                {interval.start.getTime()} - {interval.end.getTime()}
            </span>
        </div>
    )

    const renderTrailerType = (): JSX.Element => {
        return <div className={styles.trailerType}>53' Reefer</div>
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
                {renderTrailerType()}
                {renderMileage()}
                {renderPayment()}
            </div>
        </div>
    )
}
