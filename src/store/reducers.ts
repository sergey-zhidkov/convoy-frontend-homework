import { actionTypes, SetFetchStateAction, SetSearchStateAction, UpdateOfferListAction } from "./actions"
import { combineReducers } from "redux"
import { Offer, OrderType, SearchState, SortType } from "../types/types"

export enum FetchState {
    Loading,
    Success,
    Error,
}

const defaultSearchState: SearchState = {
    offset: 0,
    limit: 3,
    sort: SortType.pickupDate,
    order: OrderType.desc,
}

export interface OffersState {
    offerList: Offer[]
    fetchState: FetchState
    searchState: SearchState
    error: string
}

function offerList(state: Offer[] = [], action: UpdateOfferListAction): Offer[] {
    if (action.type === actionTypes.addOfferList) {
        debugger
        return [...state, ...action.payload]
    } else if (action.type === actionTypes.setOfferList) {
        return [...action.payload]
    }

    return state
}

function fetchState(state: FetchState = FetchState.Success, action: SetFetchStateAction): FetchState {
    if (action.type === actionTypes.setFetchStateLoading) {
        return FetchState.Loading
    } else if (action.type === actionTypes.setFetchStateSuccess) {
        return FetchState.Success
    } else if (action.type === actionTypes.setFetchStateError) {
        return FetchState.Error
    }

    return state
}

function searchState(state: SearchState = { ...defaultSearchState }, action: SetSearchStateAction): SearchState {
    if (action.type === actionTypes.setSearchState) {
        return Object.assign({}, state, action.payload)
    }

    return state
}

export const offerReducers = combineReducers({ offerList, fetchState, searchState })
