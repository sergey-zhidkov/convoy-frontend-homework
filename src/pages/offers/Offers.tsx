import React from "react"
import styles from "./Offers.module.scss"
import { RouteComponentProps } from "react-router-dom"
import { buildClassName } from "../../utils/utils"
import { Content } from "../../shared/content/Content"

interface OffersProps extends RouteComponentProps {
    className?: string
}

export function Offers({ className }: OffersProps): JSX.Element {
    // const [searchMode, setSearchMode] = useState(false)

    // const cards = useSelector((state: RootState) => state.cardState.cards)
    // const { fetchState, searchResponse } = useSelector((state: RootState) => state.cardState.cardListInfo)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     if (!cards?.length) {
    //         dispatch(actions.getNextCards())
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

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

    // const handleSearchReset = (): void => {
    //     if (searchMode) {
    //         setSearchMode(false)
    //         dispatch(actions.resetSearchState())
    //         dispatch(actions.getNextCards())
    //     }
    // }

    return (
        <div className={buildClassName("Offers", styles.Offers, className)}>
            <Content />
        </div>
    )
}
