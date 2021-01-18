import { Action, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { FetchClient } from "../utils/FetchClient"
import { RootState } from "./store"
import { OffersState } from "./reducers"
import { Offer } from "../types/types"

interface PayloadAction<T> extends Action {
    type: string
    payload: T
}

export const actionTypes = {
    getOffers: "convoy_getOffers",
    updateGetOffersFetchState: "convoy_updateGetOffersFetchState",
    failureGetOffersFetchState: "convoy_failureGetOffersFetchState",
}

export interface GetOffersAction extends PayloadAction<Offer[]> {}
export interface SetGetOffersFailureAction extends PayloadAction<string> {}

export type ThunkPromiseAction = ThunkAction<Promise<void>, RootState, undefined, Action>
export type ThunkVoidAction = ThunkAction<void, RootState, undefined, Action>

// function hasMoreOffers(offersState: OffersState): boolean {
//     const cardsCount = offersState.offers?.length || 0
//     const totalCount = offersState.offerListInfo.searchResponse?._totalCount
//     return totalCount === undefined || cardsCount < totalCount
// }

// Unique request id to synchronize HTTP requests
let requestId = 0

export const actions = {
    // getNextCards(namePattern?: string): ThunkPromiseAction {
    //     requestId++
    //     const curRequestId = requestId
    //     return async (dispatch: Dispatch<any>, getState: () => RootState): Promise<void> => {
    //         try {
    //             const cardState = getState().cardState
    //             if (!hasMoreOffers(cardState)) {
    //                 return
    //             }
    //             dispatch(this.updateGetCardsFetchState())
    //             const nextUrl = cardState.cardListInfo.searchResponse?._links?.next
    //             const client = new FetchClient(nextUrl)
    //             const result = await client.fetchCards(namePattern)
    //             // Cancel results for stale request
    //             if (curRequestId !== requestId) {
    //                 return
    //             }
    //             const cards = result.cards
    //             // don't save card list twice
    //             result.cards = []
    //             dispatch<AddCardsAction>({
    //                 type: actionTypes.addCards,
    //                 payload: cards,
    //             })
    //             dispatch<GetSearchResponseAction>({
    //                 type: actionTypes.getOffers,
    //                 payload: result,
    //             })
    //         } catch (err) {
    //             dispatch(this.failureGetCardsFetchState(err.toString()))
    //         }
    //     }
    // },
    // resetSearchState(): ThunkVoidAction {
    //     return (dispatch: Dispatch): void => {
    //         dispatch({
    //             type: actionTypes.resetSearchState,
    //         })
    //         dispatch<SetCardsAction>({
    //             type: actionTypes.setCards,
    //             payload: [],
    //         })
    //     }
    // },
    // updateGetCardsFetchState(): ThunkVoidAction {
    //     return (dispatch: Dispatch): void => {
    //         dispatch({
    //             type: actionTypes.updateGetCardsFetchState,
    //         })
    //     }
    // },
    // failureGetCardsFetchState(error: string): ThunkVoidAction {
    //     return (dispatch: Dispatch): void => {
    //         dispatch<SetGetCardsFailureAction>({
    //             type: actionTypes.failureGetCardsFetchState,
    //             payload: error,
    //         })
    //     }
    // },
}
