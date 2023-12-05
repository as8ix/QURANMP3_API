const apiUrl = 'https://mp3quran.net/api/v3';
const language = 'ar'

async function displaySuwar(){

    const displaySurah = document.querySelector("#displaySurah")
    const res = await fetch(`${apiUrl}/tafsir`)
    const data = await res.json()
    const tafasir = data.tafasir.soar

    data.tafasir.soar.forEach((item) =>
    displaySurah.innerHTML += `<button onclick="playAudio(this.value)" type="button" class="btn btn-primary col-3 mx-2 my-2" style="width: 250px"
        value=${item.url}> تفسير ${item.name}</button>`);
        

}
displaySuwar();
function playAudio(audioSrc) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
  }
  playAudio()