import React, { useEffect } from "react"
import styles from "./Offers.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { buildClassName } from "../../utils/utils"
import { OfferList } from "../../shared/offer-list/OfferList"
import { RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../store/actions"
import { FetchState } from "../../store/reducers"

interface OffersProps extends RouteComponentProps {
    className?: string
}

export function Offers({ className }: OffersProps): JSX.Element {
    // const [searchMode, setSearchMode] = useState(false)

    const { offerList, fetchState } = useSelector((state: RootState) => state.offerReducers)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!offerList?.length) {
            dispatch(actions.getNextOfferList())
        }
    }, [])

    // const handleScrollToBottom = (): void => {
    //     const cardsCount = cards?.length || 0
    //     const totalCount = searchResponse?._totalCount
    //     if (cardsCount === totalCount || fetchState === FetchState.Loading) {
    //         return
    //     }
    //     dispatch(actions.getNextCards())
    // }

    // const handleSearch = (query: string): void => {
    //     if (query.trim()) {
    //         setSearchMode(true)
    //         dispatch(actions.resetSearchState())
    //         dispatch(actions.getNextCards(query.trim()))
    //     }
    // }

    const renderShowMore = (): JSX.Element => {
        return (
            <button className={styles.showMore} disabled={fetchState !== FetchState.Success} onClick={handleSearchNext}>
                Show more
            </button>
        )
    }

    const handleSearchNext = (): void => {}

    return (
        <div className={buildClassName("Offers", styles.Offers, className)}>
            <div className={styles.sortSelector}>Sort by: Most Recent</div>
            <OfferList className={styles.offerList} offerList={offerList} />
            {renderShowMore()}
        </div>
    )
}
