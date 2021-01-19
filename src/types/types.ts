export interface OfferResponse {
    miles: number
    origin: OriginResponse
    destination: DestinationResponse
    offer: number
}

export interface Offer {
    miles: number
    origin: Origin
    destination: Destination
    offer: number
    isRequested: boolean
}

export interface OriginResponse {
    city: string
    state: string
    pickup: TimeIntervalResponse
}

export interface DestinationResponse {
    city: string
    state: string
    dropoff: TimeIntervalResponse
}

export interface Origin {
    city: string
    state: string
    pickup: TimeInterval
}

export interface Destination {
    city: string
    state: string
    dropoff: TimeInterval
}

export interface TimeIntervalResponse {
    start: string
    end: string
}

export interface TimeInterval {
    start: Date
    end: Date
}

export enum SortType {
    pickupDate = "pickupDate",
    dropoffDate = "dropoffDate",
    price = "price",
    origin = "origin",
    destination = "destination",
    miles = "miles",
}

export enum OrderType {
    desc = "desc",
    asc = "asc",
}

export interface SearchState {
    offset: number
    limit: number
    sort: SortType
    order: OrderType
}
