let seconds = document.querySelector('#seconds')
let minutes = document.querySelector('#input')
let calcBtn = document.querySelector('#calcBtn')

calcBtn.addEventListener('click',()=>{
    seconds.innerHTML = minutes.value * 60
})