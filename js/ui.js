class Interface {
    constructor () {
        this.init()
    }

    init() {
        this.buildSelect()
    }

    buildSelect() {
        api.getCoinsAPI()
            .then(coins => {

                const select = document.querySelector('#criptomoneda')

                for (const [key, value] of Object.entries(coins.coins.Data)) {
                    const option = document.createElement('option')

                    option.value = value.Symbol
                    option.appendChild(document.createTextNode(value.CoinName))
                    select.appendChild(option)
                }
                
            })
            .catch(err => {

            })
    }

    getMessage(m, c) {
        let div = document.createElement('div')
        div.className = c
        div.appendChild(document.createTextNode(m))

        let divMessage = document.querySelector('.mensajes')
        divMessage.appendChild(div)

        setTimeout(() => {
            document.querySelector('.mensajes div').remove()
        }, 3000)
    }

    getResultsCoin(result, money, coin) {
        console.log(result[coin][money])
        const dataCoin = result[coin][money]
        let html = `
            <div class="card bg-success">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de: ${dataCoin.FROMSYMBOL} a moneda ${dataCoin.TOSYMBOL} es de: ${dataCoin.PRICE.toFixed(2)}</p>
                </div>
            </div>
        `
        document.querySelector('#resultado').innerHTML = html
    }
}