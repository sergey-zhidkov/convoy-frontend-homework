import React from "react"
import styles from "./OfferList.module.scss"
import { buildClassName } from "../../utils/utils"
import { Offer } from "../../types/types"
import { OfferEntry } from "./components/OfferEntry"

interface OfferListProps {
    className?: string
    offerList: Offer[]
}

export const OfferList: React.FC<OfferListProps> = ({ className, offerList }): JSX.Element => {
    const renderOfferList = (): JSX.Element[] => {
        // const offers: Offer[] = [
        //     {
        //         miles: 746,
        //         origin: {
        //             city: "Toronto",
        //             state: "ON",
        //             pickup: { start: "2021-02-01T12:00:00.000Z", end: "2021-02-01T12:00:00.000Z" },
        //         },
        //         destination: {
        //             city: "Tupelo",
        //             state: "MS",
        //             dropoff: { start: "2021-02-01T09:00:00.000Z", end: "2021-02-01T14:00:00.000Z" },
        //         },
        //         offer: 1119,
        //     },
        //     {
        //         miles: 2501,
        //         origin: {
        //             city: "Santa Barbara",
        //             state: "CA",
        //             pickup: { start: "2021-02-01T12:00:00.000Z", end: "2021-02-01T13:00:00.000Z" },
        //         },
        //         destination: {
        //             city: "Springfield",
        //             state: "IL",
        //             dropoff: { start: "2021-02-08T10:00:00.000Z", end: "2021-02-08T10:00:00.000Z" },
        //         },
        //         offer: 3751.5,
        //     },
        //     {
        //         miles: 944,
        //         origin: {
        //             city: "Springfield",
        //             state: "MA",
        //             pickup: { start: "2021-02-01T12:00:00.000Z", end: "2021-02-01T13:00:00.000Z" },
        //         },
        //         destination: {
        //             city: "Trinidad",
        //             state: "CO",
        //             dropoff: { start: "2021-02-02T12:00:00.000Z", end: "2021-02-02T16:00:00.000Z" },
        //         },
        //         offer: 1416,
        //     },
        // ]
        return (offerList || []).map((offer: Offer, index: number) => (
            <OfferEntry offer={offer} key={index} className={styles.offerEntry} />
        ))
    }

    return <div className={buildClassName("OfferList", styles.OfferList, className)}>{renderOfferList()}</div>
}
