import React, { useEffect } from "react"
import styles from "./Offers.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { buildClassName } from "../../utils/utils"
import { OfferList } from "../../shared/offer-list/OfferList"
import { RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import { FetchState } from "../../store/reducers"
import { BeatLoader } from "react-spinners"
import { SortSelector } from "../../shared/sort-selector/SortSelector"
import { SortType } from "../../types/types"

interface OffersProps extends RouteComponentProps {
    className?: string
}

export function Offers({ className }: OffersProps): JSX.Element {
    const { offerList, fetchState, error, searchState } = useSelector((state: RootState) => state.offerReducers)
    const isLoading = fetchState === FetchState.Loading

    const dispatch = useDispatch()

    useEffect(() => {
        if (!offerList?.length) {
            dispatch(actions.getNextOfferList())
        }
    }, [])

    const renderShowMore = (): JSX.Element => {
        return (
            <div className={styles.showMoreContainer}>
                <button className={styles.showMore} disabled={isLoading} onClick={handleSearchNext}>
                    {!isLoading && <span>Show more</span>}
                    {isLoading && <BeatLoader size={36} margin={2} loading={true} color="#ffffff" />}
                </button>
                {error && <div className={styles.errorContainer}>{error}</div>}
            </div>
        )
    }

    const handleSearchNext = (): void => {
        dispatch(actions.getNextOfferList())
    }

    const handleSortChange = (sortOrder: string): void => {
        if (sortOrder !== searchState.sort) {
            const newSearchState = { ...searchState }
            newSearchState.sort = sortOrder as SortType
            dispatch(actions.setSearchState(newSearchState))
            dispatch(actions.setOfferList([]))
            dispatch(actions.getNextOfferList())
        }
    }

    return (
        <div className={buildClassName("Offers", styles.Offers, className)}>
            <SortSelector
                className={styles.sortSelector}
                selectedValue={searchState.sort}
                onChange={handleSortChange}
            />
            <OfferList className={styles.offerList} offerList={offerList} />
            {renderShowMore()}
        </div>
    )
}
