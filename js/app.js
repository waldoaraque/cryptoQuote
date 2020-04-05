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
        
    }
})