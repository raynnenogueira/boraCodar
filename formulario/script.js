let currentStep = 0;
const formSteps = document.querySelectorAll('.step')
const form = document.querySelector('form')

/* STEPS */
form.addEventListener('click', (e) => {
    if(!e.target.matches('[data-action]')) {
        return
    }

    const actions = {
        next() {
            if(!isValidInputs()) {
                return
            }
            currentStep++
        },

        prev() {
            currentStep--
        }
    }

    const action = e.target.dataset.action
    actions[action]()

    console.log(currentStep)
    updateActiveStep()
    updateProgressStep()
})

/* ENVIO DO FORMULARIO */
form.addEventListener('submit' , (e) => {
    e.preventDefault()

    const data = new FormData(form)
    alert(`Obrigada(o), ${data.get('name')}!`)
})


function updateActiveStep() {
    formSteps.forEach(step => step.classList.remove('active'))
    formSteps[currentStep].classList.add('active')
}

const progressStep = document.querySelectorAll('.menu [data-step]')
function updateProgressStep() {
    progressStep.forEach((step, idx) => {
        step.classList.remove('active')
        step.classList.remove('checked')

        if(idx < currentStep + 1) {
            step.classList.add('active')
        }

        if(idx < currentStep) {
            step.classList.add('checked')
        }
    })
}


/* VALIDACAO */
function isValidInputs() {
    const currentFormStep = formSteps[currentStep]
    const formFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')]

    return formFields.every((input) => input.reportValidity())
}


