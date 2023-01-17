import Sounds from"./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js";
import { 
    minutesDisplay,
    secondsDisplay,
    buttonSoundForest,
    buttonSoundCafeteria,
    buttonSoundRain,
    buttonSoundFireplace,
    buttonSoundForest2,
    buttonSoundRain2,
    buttonSoundCafeteria2,
    buttonSoundFireplace2 } from "./elements.js";



const controls = Controls(
    buttonSoundForest,
    buttonSoundForest2,
    buttonSoundCafeteria,
    buttonSoundCafeteria2,
    buttonSoundRain,
    buttonSoundRain2,
    buttonSoundFireplace,
    buttonSoundFireplace2)

const sound = Sounds()

const timer = Timer({ minutesDisplay, 
    secondsDisplay, 
    resetControls : controls.reset,
    sound
})


Events({controls, sound, timer})
