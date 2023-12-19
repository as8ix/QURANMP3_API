const apiUrl = 'https://mp3quran.net/api/v3';
const language = 'ar'

async function displaySuwar(){

    const displaySurah = document.querySelector("#displaySurah")
    const res = await fetch(`${apiUrl}/tafsir`)
    const data = await res.json()
    // console.log(data);
    const tafasir = data.tafasir.soar

    data.tafasir.soar.forEach((item) =>
    displaySurah.innerHTML += `<button onclick="playAudio(this.value)" type="button" class="btn btn-primary col-3 mx-2 my-2" style="width: 280px;text-shadow: 2px 1px 5px #000;"
        value=${item.url}> تفسير ${item.name}</button>`);
        

}
displaySuwar();

function playAudio(audioSrc) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
}
playAudio()

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


