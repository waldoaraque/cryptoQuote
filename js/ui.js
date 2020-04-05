class Interface {
    constructor () {}

    getMessage(m, c) {
        let div = document.createElement('div')
        div.className = c
        div.appendChild(document.createTextNode(m))

        let divMessage = document.querySelector('.mensajes')
        divMessage.appendChild(div)

        setTimeout(() => {
            document.querySelector('.mensajes dev').remove()
        }, 3000)
    }
}