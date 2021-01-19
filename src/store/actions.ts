import { Action, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { FetchClient } from "../utils/FetchClient"
import { RootState } from "./store"
import { Offer, SearchState } from "../types/types"

interface PayloadAction<T> extends Action {
    type: string
    payload: T
}

export const actionTypes = {
    addOfferList: "convoy_addOfferList",
    setOfferList: "convoy_setOfferList",
    setFetchStateSuccess: "convoy_setFetchStateSuccess",
    setFetchStateLoading: "convoy_setFetchStateLoading",
    setFetchStateError: "convoy_setFetchStateError",
    setSearchState: "convoy_setSearchState",
}

export interface UpdateOfferListAction extends PayloadAction<Offer[]> {}
export interface SetFetchStateAction extends PayloadAction<void> {}
export interface SetSearchStateAction extends PayloadAction<SearchState> {}

export type ThunkPromiseAction = ThunkAction<Promise<void>, RootState, undefined, Action>
export type ThunkVoidAction = ThunkAction<void, RootState, undefined, Action>

// function hasMoreOffers(offersState: OffersState): boolean {
//     const cardsCount = offersState.offers?.length || 0
//     const totalCount = offersState.offerListInfo.searchResponse?._totalCount
//     return totalCount === undefined || cardsCount < totalCount
// }

// Unique request id to synchronize HTTP requests
// let requestId = 0

export const actions = {
    getNextOfferList(): ThunkPromiseAction {
        return async (dispatch: Dispatch<any>, getState: () => RootState): Promise<void> => {
            try {
                dispatch(this.updateSetFetchState(actionTypes.setFetchStateLoading))
                const searchState = getState().offerReducers.searchState
                const client = new FetchClient(searchState)
                const result = await client.fetchOfferList()
                console.log(result)
                dispatch(this.updateSetFetchState(actionTypes.setFetchStateSuccess))
                dispatch(this.updateSearchState(searchState, result))
                dispatch(this.addOfferList(result))
            } catch (err) {
                dispatch(this.failureGetOffertListFetchState(err.toString()))
            }
        }
    },
    addOfferList(offerList: Offer[]): ThunkVoidAction {
        return (dispatch: Dispatch): void => {
            dispatch<UpdateOfferListAction>({
                type: actionTypes.addOfferList,
                payload: offerList,
            })
        }
    },
    setOfferList(offerList: Offer[]): ThunkVoidAction {
        return (dispatch: Dispatch): void => {
            dispatch<UpdateOfferListAction>({
                type: actionTypes.setOfferList,
                payload: offerList,
            })
        }
    },
    updateSearchState(curState: SearchState, offerList: Offer[]): ThunkVoidAction {
        return (dispatch: Dispatch<any>): void => {
            const newState = { ...curState }
            newState.offset += offerList.length
            dispatch(this.setSearchState(newState))
        }
    },
    setSearchState(state: SearchState): ThunkVoidAction {
        return (dispatch: Dispatch): void => {
            dispatch<SetSearchStateAction>({
                type: actionTypes.setSearchState,
                payload: state,
            })
        }
    },
    updateSetFetchState(actionType: string): ThunkVoidAction {
        return (dispatch: Dispatch): void => {
            dispatch<SetFetchStateAction>({
                type: actionType,
                payload: undefined,
            })
        }
    },
    failureGetOffertListFetchState(error: string): ThunkVoidAction {
        return (dispatch: Dispatch<any>): void => {
            dispatch(this.updateSetFetchState(actionTypes.setFetchStateError))
        }
    },
}
