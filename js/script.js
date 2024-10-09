const englishArea = document.getElementById("english-area")
const indonesiaArea = document.getElementById("indonesia-area")
let position = localStorage.getItem("position")


let englishText = ''
dataInggris.forEach((text, i) => {
    
    englishText += `<div class="area-text ${(i % 2) ? 'read-area' : 'read-area-odd'} my-3">
                        > ${text}
                    </div>`
    
})

englishArea.innerHTML = englishText

let indonesiaText = ''
dataIndonesia.forEach((text, i) => {
    indonesiaText += `<div class="area-text ${(i % 2) ? 'read-area' : 'read-area-odd'} my-3">
                        > ${text}
                    </div>`
    
})

englishArea.scrollTop = (position) ? parseInt(position) : null
indonesiaArea.scrollTop = (position) ? parseInt(position) : null


indonesiaArea.innerHTML = indonesiaText


englishArea.addEventListener('scroll', (e) => {

    indonesiaArea.scrollTop = englishArea.scrollTop
    localStorage.setItem("position", englishArea.scrollTop);
})


