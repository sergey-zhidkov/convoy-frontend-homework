import { actionTypes } from "./actions"
import { combineReducers } from "redux"
import { Offer } from "../types/types"

export enum FetchState {
    Loading,
    Success,
    Error,
}

export interface OffersState {
    offerListInfo: Readonly<{
        searchResponse: Offer[] | null
        fetchState: FetchState
        error: string
    }>
}

// function cardListInfo(
//     state: OffersState["offerListInfo"] = {
//         searchResponse: null,
//         fetchState: FetchState.Success,
//         error: "",
//     },
//     action: GetSearchResponseAction | SetGetCardsFailureAction
// ): OffersState["offerListInfo"] {
//     if (action.type === actionTypes.getOffers) {
//         return {
//             searchResponse: action.payload as EslSearchResponse,
//             fetchState: FetchState.Success,
//             error: state.error,
//         }
//     } else if (action.type === actionTypes.updateGetCardsFetchState) {
//         return {
//             searchResponse: state.searchResponse,
//             fetchState: FetchState.Loading,
//             error: state.error,
//         }
//     } else if (action.type === actionTypes.failureGetCardsFetchState) {
//         return {
//             searchResponse: state.searchResponse,
//             fetchState: FetchState.Error,
//             error: action.payload as string,
//         }
//     } else if (action.type === actionTypes.resetSearchState) {
//         return {
//             searchResponse: null,
//             fetchState: FetchState.Success,
//             error: "",
//         }
//     }

//     return state
// }

// function cards(state: CardInfo[] = [], action: AddCardsAction | SetCardsAction): CardInfo[] {
//     if (action.type === actionTypes.addCards) {
//         return [...state, ...action.payload]
//     } else if (action.type === actionTypes.setCards) {
//         return [...action.payload]
//     }

//     return state
// }

export const offerReducers = combineReducers({})
