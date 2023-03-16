const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('input')
const resuntadoInput = document.getElementById('result')

const digitaveis = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click' , function(){
    input.value =''
    input.focus()
})

input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if (digitaveis.includes(ev.key)){
        input.value += ev.key
        return
    }

    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === 'Enter'){
        calcular()
    }
})

document.getElementById('equal').addEventListener('click', calcular)

function calcular(){
    const resultado = eval(input.value)
    resuntadoInput.value = resultado
    input.value =''
    input.focus()
}
input.focus()


document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copiado'
        button.classList.add('success')
        navigator.clipboard.writeText(resuntadoInput.value)
    } else {
        button.innerText = "Copy"
        button.classList.remove("success")
      }
})

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
      }
})