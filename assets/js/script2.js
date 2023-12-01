const apiUrl = 'https://mp3quran.net/api/v3';
const language = 'ar'

async function displaySurah(suwarh){

    const displaySurah = document.querySelector("#displaySurah")
    
    
    const res = await fetch(`${apiUrl}/suwar`)
    const data = await res.json()
    
    const surahNames = data.suwar
    
    console.log(surahNames);

    surahNames.forEach(suwarh => 
        displaySurah.innerHTML += 
        `<button type="button" class="btn btn-primary col-3 mx-2 my-2" style="width: 250px"
        value=${suwarh.id}>سورة ${suwarh.name}</button>`
        );
        // console.log(suwarh.name)
    

}
displaySurah()


// al tafasir
async function playTafasir(){

    const audioPlayer = document.querySelector("#audioPlayer")

    const res = await fetch(`https://mp3quran.net/api/v3/tafsir`)
    const data = await res.json()

    const tafasir = data.tafasir.soar;


    console.log(tafasir);









    // audioPlayer.addEventListener('change', e => {
    //     const selectedSurah = audioPlayer.options[audioPlayer.selectedIndex]
    //     playSurah(selectedSurah.value)

    // })

}
playTafasir()