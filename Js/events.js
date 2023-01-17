import {
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonSoundForest,
    buttonSoundCafeteria,
    buttonSoundRain,
    buttonSoundFireplace,
    buttonSoundForest2,
    buttonSoundRain2,
    buttonSoundCafeteria2,
    buttonSoundFireplace2} from"./elements.js"

export default function Events({controls, timer, sound}) {
buttonPlay.addEventListener('click', function(){
    timer.countDown()
    sound.buttonAudio()
    })
    
    buttonMore.addEventListener('click', function(){
    timer.moreMinutes()
    sound.buttonAudio()
    })
    
    buttonLess.addEventListener('click', function(){
    timer.anyLessMinutes()
    sound.buttonAudio()
    })
    
    buttonStop.addEventListener('click',function() {
        controls.reset()
        timer.Stop()
        sound.buttonAudio()
        sound.stopSound()
    })

    buttonSoundForest.addEventListener('click', function(){
    controls.Florest()
    sound.buttonAudio()
    sound.florestSound.play()
    })
    
    buttonSoundForest2.addEventListener('click', function(){
    controls.FlorestBlue()
    sound.buttonAudio()
    sound.florestSound.pause()
    })
    
    buttonSoundRain.addEventListener('click', function(){
    controls.Rain()
    sound.buttonAudio()
    sound.rainSound.play()
    })
        
    buttonSoundRain2.addEventListener('click', function(){
    controls.RainBlue()
    sound.buttonAudio()
    sound.rainSound.pause()
    })
    
    buttonSoundCafeteria.addEventListener('click', function(){
    controls.Cafeteria()
    sound.buttonAudio()
    sound.cafeteriaSound.play()
    })
    
    
    
    buttonSoundCafeteria2.addEventListener('click', function(){
    controls.CafeteriaBlue()
    sound.buttonAudio()
    sound.cafeteriaSound.pause()
    })
        
    buttonSoundFireplace.addEventListener('click', function(){
    controls.Fireplace()
    sound.buttonAudio()
    sound.fireplaceSound.play()
    })
        
    buttonSoundFireplace2.addEventListener('click', function(){
    controls.FireplaceBlue()
    sound.buttonAudio()
    sound.fireplaceSound.pause()
    })
} 