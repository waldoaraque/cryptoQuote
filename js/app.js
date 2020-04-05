const api = new API('cf1e4c964485dec545a28ba9aaea02ef13c1f70365ec4958d2cf77395f32b9e6')
const ui = new Interface()

const form = document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault()
    let money = document.querySelector('#moneda')
    let moneySelected = money.options[money.selectedIndex].value

    let coin = document.querySelector('#criptomoneda')
    let coinSelected = coin.options[coin.selectedIndex].value

    if (moneySelected === '' || coinSelected === '') {
        ui.getMessage('Ambos campos son obligatorios', 'alert bg-danger text-center')
    } else {
        api.getValues(moneySelected, coinSelected)
            .then( data => {
                ui.getResultsCoin(data.result.RAW, moneySelected, coinSelected)
            })
            .catch( err => {
                console.log(`An error has been ocurred ${err}`)
            })
    }
})