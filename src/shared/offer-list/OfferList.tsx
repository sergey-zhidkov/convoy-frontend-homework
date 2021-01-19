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
        return (offerList || []).map((offer: Offer, index: number) => (
            <OfferEntry offer={offer} key={index} className={styles.offerEntry} />
        ))
    }

    return <div className={buildClassName("OfferList", styles.OfferList, className)}>{renderOfferList()}</div>
}
