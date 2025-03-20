let effect_enabled = true
let music_enabled = true

const pagemanager = new PageManager()
pagemanager.addPageID("start-menu")
pagemanager.addPageID("game")
pagemanager.goToPageID("game")

const audiomanager = new AudioManager()
audiomanager.addAudio("tap", "src/assets/sounds/tap.mp3")


document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("click", () => {
        if(effect_enabled){
            audiomanager.playAudio("tap", 0.4)
        }
    })
});



const keyboard = document.querySelector(".keyboard")
const keys = keyboard.querySelectorAll(".key")

keys.forEach(el => {
    el.addEventListener("click", () => {
        if(effect_enabled){
            audiomanager.playAudio("tap", 0.4)
        }
    })
});

console.log(keys);




const music_btn = document.querySelector("#music-btn")
const effect_btn = document.querySelector("#effect-btn")

const start_menu_buttons = [music_btn, effect_btn]


start_menu_buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("deselected")
        btn.classList.toggle("activated")

        switch (btn.id) {
            case "music-btn":
                music_enabled = !music_enabled
                break;
        
            case "effect-btn":
                effect_enabled = !effect_enabled
                break;
        }
    })
});


function gameInit() {
    return ({
        prova: "ciao"
    })
}