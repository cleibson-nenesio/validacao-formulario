const botaoValidar = document.getElementById('botao-enviar')

botaoValidar.addEventListener('click', (event) => {
    event.preventDefault()

    const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio')

    camposObrigatorios.forEach(function (input) {
        if(input.firstElementChild.value == ''){
            input.classList.add('invalido')
        }

        input.addEventListener('change', () => {
            input.classList.remove('invalido')
            input.classList.add('validado')
        })
    })
})