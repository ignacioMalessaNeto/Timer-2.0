export default function Controls(
    buttonSoundForest,
    buttonSoundForest2,
    buttonSoundCafeteria,
    buttonSoundCafeteria2,
    buttonSoundRain,
    buttonSoundRain2,
    buttonSoundFireplace,
    buttonSoundFireplace2) {
    
function reset() {
    buttonSoundForest.classList.remove('hide')
    buttonSoundForest2.classList.add('hide')
        
    buttonSoundRain.classList.remove('hide')
    buttonSoundRain2.classList.add('hide')
    
    buttonSoundCafeteria.classList.remove('hide')
    buttonSoundCafeteria2.classList.add('hide')
    
    buttonSoundFireplace.classList.remove('hide')
    buttonSoundFireplace2.classList.add('hide')
}

function Florest() {
    buttonSoundForest.classList.add('hide')
    buttonSoundForest2.classList.remove('hide')
}

function FlorestBlue() {
    buttonSoundForest.classList.remove('hide')
    buttonSoundForest2.classList.add('hide')
}

function Rain() {
    buttonSoundRain.classList.add('hide')
    buttonSoundRain2.classList.remove('hide')
}

function RainBlue() {
    buttonSoundRain.classList.remove('hide')
    buttonSoundRain2.classList.add('hide')
}

function Cafeteria() {
    buttonSoundCafeteria.classList.add('hide')
    buttonSoundCafeteria2.classList.remove('hide')    
}

function CafeteriaBlue() {
    buttonSoundCafeteria.classList.remove('hide')
    buttonSoundCafeteria2.classList.add('hide')
}

function Fireplace() {
    buttonSoundFireplace.classList.add('hide')
    buttonSoundFireplace2.classList.remove('hide')
}

function FireplaceBlue() {
    buttonSoundFireplace.classList.remove('hide')
    buttonSoundFireplace2.classList.add('hide')
}

return{ 
 reset,
 Florest,
 FlorestBlue,
 Rain,
 RainBlue,
 Cafeteria,
 CafeteriaBlue,
 Fireplace,
 FireplaceBlue
}
}