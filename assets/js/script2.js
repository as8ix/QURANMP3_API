const apiUrl = 'https://mp3quran.net/api/v3';
const language = 'ar'

async function displaySurah(suwarh){

    const displaySurah = document.querySelector("#displaySurah")
    
    
    const res = await fetch(`${apiUrl}/suwar`)
    const data = await res.json()
    
    const surahNames = data.suwar
    
    console.log(data);
    console.log(surahNames);

    surahNames.forEach(suwarh => 
        displaySurah.innerHTML += 
        `<button type="button" class="btn btn-primary col-3 mx-2 my-2" style="width: 250px"
        value=${suwarh.id}>${suwarh.name}</button>`
        );
        console.log(suwarh.name)
    

}
displaySurah()


