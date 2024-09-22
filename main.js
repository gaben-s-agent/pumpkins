setTimeout( ()=>{ main() },1)

function main() {
    
    firstOperand = document.querySelector('#firstOperand')
    firstSign = document.querySelector('#firstSign')
    secondOperand = document.querySelector('#secondOperand')
    equalSign = document.querySelector('#equalSign')
    result = document.querySelector('#result')
    pumpkinDiv = '<div class="col">🎃</div>'

    firstSign.addEventListener('click', ()=>{ 
        firstSign.textContent === '-'
            ? firstSign.textContent = '+'
            : firstSign.textContent = '-' 
        result.nextElementSibling.innerHTML = ''
        result.value = ''
    })

    equalSign.addEventListener('click', (e)=>{
        firstSign.textContent === '+'
            ? result.value = +firstOperand.value + +secondOperand.value
            : result.value = +firstOperand.value - +secondOperand.value

        result.nextElementSibling.innerHTML = ''
        for (let i = 0; i < result.value; i++) {
            result.nextElementSibling.insertAdjacentHTML('beforeEnd', pumpkinDiv)
        }
    })

    firstOperand.addEventListener('input', (e)=> {
        firstOperand.nextElementSibling.innerHTML = ''
        for (let i = 0; i < e.target.value; i++) {
            firstOperand.nextElementSibling.insertAdjacentHTML('beforeEnd', pumpkinDiv)
        }
    })

    secondOperand.addEventListener('input', (e)=> {
        secondOperand.nextElementSibling.innerHTML = ''
        for (let i = 0; i < e.target.value; i++) {
            secondOperand.nextElementSibling.insertAdjacentHTML('beforeEnd', pumpkinDiv)
        }
    })

    result.addEventListener('input', (e)=> {
        result.nextElementSibling.innerHTML = ''
        for (let i = 0; i < e.target.value; i++) {
            result.nextElementSibling.insertAdjacentHTML('beforeEnd', pumpkinDiv)
        }
    })

}