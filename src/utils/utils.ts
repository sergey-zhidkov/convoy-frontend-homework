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
