export interface Offer {
    miles: number
    origin: Location
    destination: Location
    offer: number
}

export interface Location {
    city: string
    state: string
    pickup: TimeInterval
}

export interface TimeInterval {
    start: Date
    end: Date
}

export interface EslSearchResponse {
    cards: CardInfo[]
    _links: { next?: string; prev?: string }
    _pageSize: number
    _totalCount: number
}

export interface CardInfo {
    id: string
    attributes: string[]
    collectible: boolean
    cost: number
    imageUrl: string
    name: string
    rarity: string
    set: CardSet
    text: string
    type: string
    unique: boolean
}

export interface CardSet {
    id: string
    name: string
    _self: string
}
