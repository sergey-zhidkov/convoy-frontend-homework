export interface Offer {
    miles: number
    origin: Origin
    destination: Destination
    offer: number
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

export interface TimeInterval {
    start: string
    end: string
}
