class Formulario{
    constructor(){
        let pegar = document.querySelector.bind(document)

        this.formulario = pegar('.formulario')
    }

    validarFormulario(){
        this.formulario.addEventListener('submit',(event)=>{
            event.preventDefault

            alert('formulario enviado com sucesso')
        })
    }

    alertar(){
        alert('estou funcionando')
    }
}

const formulario = new Formulario()
formulario.validarFormulario()
