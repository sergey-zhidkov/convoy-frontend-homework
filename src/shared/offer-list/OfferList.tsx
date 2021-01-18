import React from "react"
import styles from "./OfferList.module.scss"
import { buildClassName } from "../../utils/utils"

interface OfferListProps {
    className?: string
}

export const OfferList: React.FC<OfferListProps> = ({ className }): JSX.Element => {
    return <div className={buildClassName("OfferList", styles.OfferList, className)}>Offers list</div>
}
