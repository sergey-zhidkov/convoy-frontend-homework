import axios, { AxiosResponse, CancelTokenSource, AxiosRequestConfig } from "axios"
import { convoyApiEndpoint } from "../appSettings"
import { Offer } from "../types/types"

const defaultPageSize = 20

function getOffersApiUrl(): string {
    return `${convoyApiEndpoint}/offers`
}

/**
 * Helper class to make API http requests
 */
export class FetchClient {
    private readonly cardsApiUrl: string
    private readonly cancelToken: CancelTokenSource

    constructor(nextUrl?: string) {
        this.cardsApiUrl = nextUrl || getOffersApiUrl()
        this.cancelToken = axios.CancelToken.source()
    }

    get token() {
        return this.cancelToken
    }

    fetchCards(namePattern?: string): Promise<Offer> {
        const config: AxiosRequestConfig = {
            params: {
                pageSize: defaultPageSize,
                cancelToken: this.cancelToken,
            },
        }
        if (namePattern) {
            config.params.name = namePattern
        }

        return axios.get(this.cardsApiUrl, config).then((response: AxiosResponse<Offer>) => {
            return response.data
        })
    }
}
