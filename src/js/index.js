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

    /* Segunda Tentativa */

    // let nome = document.getElementById('nome')
    // let email = document.getElementById('email')
    // let celular = document.getElementById('celular')
    // let mensagem = document.getElementById('mensagem')
    

    // if(nome.firstElementChild.value == ''){
    //     nome.classList.add('invalido')
    // }
    
    // if(email.firstElementChild.value == ''){
    //     email.classList.add('invalido')
    // }

    // if(celular.firstElementChild.value == ''){
    //     celular.classList.add('invalido')
    // }

    // if(mensagem.firstElementChild.value == ''){
    //     mensagem.classList.add('invalido')
    // }

    // nome.firstElementChild.addEventListener('change', () => {
    //     nome.classList.remove('invalido')
    //     nome.firstElementChild.classList.add('validado')
    // })

    // email.firstElementChild.addEventListener('change', () => {
    //     email.classList.remove('invalido')
    //     email.firstElementChild.classList.add('validado')
    // })

    // celular.firstElementChild.addEventListener('change', () => {
    //     celular.classList.remove('invalido')
    //     celular.firstElementChild.classList.add('validado')
    // })
    
    // mensagem.firstElementChild.addEventListener('change', () => {
    //     mensagem.classList.remove('invalido')
    //     mensagem.firstElementChild.classList.add('validado')
    // })
    

    /* Primeira Tentativa */

    // const inputs = document.querySelectorAll('.dados-formulario').forEach(function (input) {
    //     if(input.value == '') {
    //         input.classList.add('invalido')
    //     }
    // })
})