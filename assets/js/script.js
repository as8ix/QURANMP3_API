
const apiUrl = 'https://mp3quran.net/api/v3';
const language = 'ar'



async function getReciters(){
    const chooseReciter = document.querySelector('#chooseReciter')
    const res = await fetch(`${apiUrl}/reciters?language=${language}`)
    const data = await res.json()

    chooseReciter.innerHTML = `<option value="">اختر القارئ</option>`

    data.reciters.forEach(reciter => chooseReciter.innerHTML += `<option value="${reciter.id}">${reciter.name}</option>`);
    chooseReciter.addEventListener('change', e => getMoshaf(e.target.value))
} 

getReciters()



async function getMoshaf(reciter){
    // console.log(reciter);

    const chooseMoshaf = document.querySelector('#chooseMoshaf')

    const res = await fetch(`${apiUrl}/reciters?language=${language}&reciter=${reciter}`)
    const data = await res.json()
    const moshaf = data.reciters[0].moshaf
    
    console.log(moshaf);
    chooseMoshaf.innerHTML =
    `<option
       value=""
       data-server=""
       data-surahList=""
       >اختر الرواية</option>
    `
    moshaf.forEach(moshaf =>{ 
        chooseMoshaf.innerHTML +=
         `<option
            value="${moshaf.id}"
            data-server="${moshaf.server}"
            data-surahList="${moshaf.surah_list}"
            >${moshaf.name}</option>
         `
        // console.log(moshaf);
    });



    chooseMoshaf.addEventListener('change', e => {
        const selectedMoshaf = chooseMoshaf.options[chooseMoshaf.selectedIndex]
        const surahServer = selectedMoshaf.dataset.server
        const surahList = selectedMoshaf.dataset.surahlist
        getSurah(surahServer , surahList)
    })

}

async function getSurah(surahServer , surahList){
    const chooseSurah = document.querySelector('#chooseSurah')

    console.log(surahServer);

    const res = await fetch(`https://mp3quran.net/api/v3/suwar`)
    const data = await res.json()
    const surahNames = data.suwar

    surahList= surahList.split(',')

    chooseSurah.innerHTML = `<option value="">اختر السورة</option>`

    surahList.forEach(surah => {
        const padSurah = surah.padStart(3,'0')

        surahNames.forEach(surahName => {
            if(surahName.id == surah){
                chooseSurah.innerHTML += `<option value="${surahServer}${padSurah}.mp3" >${surahName.name}</option> `
            }
        })

    })

    chooseSurah.addEventListener('change', e => {
        const selectedSurah = chooseSurah.options[chooseSurah.selectedIndex]
        playSurah(selectedSurah.value)

    })
}
function playSurah(surahMp3) {
    const audioPlayer = document.querySelector('#audioPlayer')
    audioPlayer.src = surahMp3
    audioPlayer.play()

}
function playLive(channel){
    if(Hls.isSupported()) {
        var video = document.getElementById('liveVideo');
        var hls = new Hls();
        hls.loadSource(`${channel}`);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
          video.play();
        });
    }
}
