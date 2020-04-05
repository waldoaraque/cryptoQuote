class API {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    async getCoinsAPI() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`

        const getURLCoins = await fetch(url)
        const coins = await getURLCoins.json()

        return {
            coins
        }
    }

    async getValues(moneys, coins) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins}&tsyms=${moneys}&api_key=${this.apiKey}`

        const convertURL = await fetch(url)
        const result = await convertURL.json()

        return {
            result
        }
    }
}