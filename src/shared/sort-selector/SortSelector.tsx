import React from "react"
import styles from "./SortSelector.module.scss"
import { buildClassName } from "../../utils/utils"
import { SortType } from "../../types/types"

interface SortSelectorProps {
    className?: string
    selectedValue: string
    onChange: (selected: string) => void
}

const options = [
    { value: SortType.pickupDate, label: "Pickup date" },
    { value: SortType.dropoffDate, label: "Dropoff date" },
    { value: SortType.price, label: "Price" },
    { value: SortType.origin, label: "Origin" },
    { value: SortType.destination, label: "Destination" },
    { value: SortType.miles, label: "Miles" },
]

export const SortSelector: React.FC<SortSelectorProps> = ({ className, selectedValue, onChange }): JSX.Element => {
    const renderOptions = (): JSX.Element[] => {
        return options.map((o) => (
            <option className={styles.option} value={o.value} selected={selectedValue === o.value}>
                {o.label}
            </option>
        ))
    }

    return (
        <div className={buildClassName("SortSelector", styles.SortSelector, className)}>
            <label className={styles.label}>Sort by:</label>
            <select className={styles.select} onChange={(event) => onChange(event.target.value)}>
                {renderOptions()}
            </select>
        </div>
    )
}
