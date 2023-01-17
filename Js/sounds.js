export default function() {
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

const cafeteriaSound = new Audio("./audios/Cafeteria.wav")

const rainSound = new Audio("./audios/Chuva.wav")

const florestSound = new Audio("./audios/Floresta.wav")

const fireplaceSound = new Audio("./audios/Lareira.wav")

cafeteriaSound.loop = true;

rainSound.loop = true;

florestSound.loop = true;

fireplaceSound.loop = true;


function buttonAudio(){
    buttonPressAudio.play()
}

function stopSound() {
    cafeteriaSound.pause(),
    rainSound.pause(),
    florestSound.pause(),
    fireplaceSound.pause()
}

return{
    cafeteriaSound,
    rainSound,
    florestSound,
    fireplaceSound,
    buttonAudio,
    stopSound
}
}