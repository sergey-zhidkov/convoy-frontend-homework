import axios, { AxiosResponse, CancelTokenSource, AxiosRequestConfig } from "axios"
import { convoyApiEndpoint } from "../appSettings"
import { Offer, OfferResponse, SearchState } from "../types/types"
import { offerListResponseToOfferList } from "./utils"

function getOffersApiUrl(): string {
    return `${convoyApiEndpoint}/offers`
}

/**
 * Helper class to make API http requests
 */
export class FetchClient {
    private readonly offerListApiUrl: string
    private readonly searchState: SearchState
    private readonly cancelToken: CancelTokenSource

    constructor(searchState: SearchState) {
        this.offerListApiUrl = getOffersApiUrl()
        this.searchState = searchState
        this.cancelToken = axios.CancelToken.source()
    }

    get token() {
        return this.cancelToken
    }

    fetchOfferList(): Promise<Offer[]> {
        const config: AxiosRequestConfig = {
            params: {
                ...this.searchState,
            },
        }

        return axios.get(this.offerListApiUrl, config).then((response: AxiosResponse<OfferResponse[]>) => {
            return offerListResponseToOfferList(response.data)
        })
    }
}
