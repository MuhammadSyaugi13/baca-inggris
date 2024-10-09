const englishArea = document.getElementById("english-area")
const indonesiaArea = document.getElementById("indonesia-area")

{/* <div class="area-text my-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim provident sequi, ut consequuntur quod eum dolorum rem esse accusantium.
</div> */}

let englishText = ''
dataInggris.forEach((text, i) => {
    
    englishText += `<div class="area-text ${(i % 2) ? 'read-area' : 'read-area-odd'} my-2">
                        > ${text}
                    </div>`
    
})

englishArea.innerHTML = englishText

let indonesiaText = ''
dataIndonesia.forEach((text, i) => {
    indonesiaText += `<div class="area-text ${(i % 2) ? 'read-area' : 'read-area-odd'} my-2">
                        > ${text}
                    </div>`
    
})

indonesiaArea.innerHTML = indonesiaText


englishArea.addEventListener('scroll', (e) => {
    console.log(e);
    console.log(englishArea.scrollTop);

    indonesiaArea.scrollTop = englishArea.scrollTop
})


