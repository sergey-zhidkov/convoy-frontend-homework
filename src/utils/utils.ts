import { Offer, OfferResponse, TimeInterval } from "../types/types"

export function buildClassName(...classNames: any[]): string {
    return (classNames || []).filter((name) => !!name).join(" ")
}

export function moneyToUSD(money: number): string {
    if (!money) {
        money = 0
    }
    const truncated = Math.trunc(money)
    const useFractions = money - truncated !== 0

    return money.toLocaleString("us-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: useFractions ? 2 : 0,
        maximumFractionDigits: useFractions ? 2 : 0,
    })
}

export function milesToLocale(miles: number): string {
    if (!miles) {
        miles = 0
    }
    if (miles === 1) {
        return `${miles} mile`
    }

    return `${miles.toLocaleString()} miles`
}

export function offerListResponseToOfferList(offerListResponse: OfferResponse[]): Offer[] {
    if (!offerListResponse?.length) {
        return []
    }

    return offerListResponse.map((response) => ({
        miles: response.miles,
        offer: response.offer,
        origin: {
            city: response.origin.city,
            state: response.origin.state,
            pickup: {
                start: new Date(response.origin.pickup.start),
                end: new Date(response.origin.pickup.end),
            },
        },
        destination: {
            city: response.destination.city,
            state: response.destination.state,
            dropoff: {
                start: new Date(response.destination.dropoff.start),
                end: new Date(response.destination.dropoff.end),
            },
        },
        // Set status randomly (30% chance), since we don't get this data from API
        isRequested: Math.random() < 0.3,
    }))
}

export function formatTimeInterval(interval: TimeInterval): string {
    if (!interval) {
        return ""
    }
    const { start, end } = interval
    const startDate = start.getDate()
    const startMonth = start.getMonth()
    const startYear = start.getFullYear()
    const endDate = end.getDate()
    const endMonth = end.getMonth()
    const endYear = end.getFullYear()

    if (startDate !== endDate || startMonth !== endMonth || startYear !== endYear) {
        return `${start.toLocaleString([], {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })} - ${end.toLocaleString([], {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })}`
    }
    return `${start.toLocaleDateString([], {
        weekday: "short",
        month: "numeric",
        day: "numeric",
    })} ${start.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    })} - ${end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
}
