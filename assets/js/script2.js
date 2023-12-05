const apiUrl = 'https://mp3quran.net/api/v3';
const language = 'ar'

async function displaySuwar(){

    const displaySurah = document.querySelector("#displaySurah")
    const res = await fetch(`${apiUrl}/tafsir`)
    const data = await res.json()
    
    
    const suraName = data.tafasir.soar[0].name
    const tafasir = data.tafasir.soar[0].url
    const tafasiirId = data.tafasir.soar[0].sura_id
    
    console.log(tafasir, suraName, tafasiirId ,data.tafasir.soar[0]);

    data.tafasir.soar.forEach(suwarh =>
    displaySurah.innerHTML += `<button type="button" class="btn btn-primary col-3 mx-2 my-2" style="width: 250px"
        value=${tafasir.sura_id}> تفسير ${tafasir}</button>`);
        
   
        

    // surahNames.forEach(suwarh => 
    //     displaySurah.innerHTML += 
    //     `<button type="button" class="btn btn-primary col-3 mx-2 my-2" style="width: 250px"
    //     value=${suwarh.id}>سورة ${suwarh.name}</button>`
    //     );
    //     // console.log(suwarh.name)
    

}
displaySuwar();