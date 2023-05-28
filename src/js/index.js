const inputEmail = document.querySelector('#input-email')
const inputSubmit = document.querySelector('#submit')
const error = document.querySelector('.error')

inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if (inputEmail.validity.valid === true) {
        error.innerHTML = ''
        inputEmail.style.border = 'none'
    } else if (inputEmail.validity.valid === false) {
        error.innerHTML = 'Oops! That is not a valid email'
        inputEmail.style.border = '1px solid var(--red)'
    }

    if (inputEmail.value == '') {
        error.innerHTML = 'Please, insert a valid email'
        inputEmail.style.border = '1px solid var(--red)'
    }
})