let effect_enabled = true
let music_enabled = false

const popup = document.querySelector(".popup-container")
const popup_title = document.querySelector(".popup-container .title")
const popup_subtitle = document.querySelector(".popup-container .subtitle")
const keyboard = document.querySelector(".keyboard")
const keys = keyboard.querySelectorAll(".key")

const messages = ["NOOOO, hai perso!", "COMPLIMENTI, hai vintoo!"]

const music_btn = document.querySelector("#music-btn")
const effect_btn = document.querySelector("#effect-btn")
const start_menu_buttons = [music_btn, effect_btn]

const pagemanager = new PageManager()
const audiomanager = new AudioManager()

pagemanager.addPageID("start-menu")
pagemanager.addPageID("game")
pagemanager.goToPageID("start-menu")

audiomanager.addAudio("tap", "src/assets/sounds/tap.mp3")

function initButtons() {
    document.querySelectorAll(".btn").forEach(el => {
        el.addEventListener("click", () => {
            if(effect_enabled){
                audiomanager.playAudio("tap", 0.4)
            }
        })
    });
}

function initKeys() {
    keys.forEach(el => {
        el.addEventListener("click", () => {
            if(effect_enabled){
                audiomanager.playAudio("tap", 0.4)
            }
            el.classList.add("deselected")
            game.checkLetter(((el.id).split("-")[1]).toLowerCase())
            updateScreen()
            
        })
    });
}

function initMenuBtn() {
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
}

initButtons()
initKeys()
initMenuBtn()

const game = new Game()
game.setWord(getRandomWord())
console.log(game.word);
console.log(game.checkWin());

updateScreen()


function updateScreen() {
    let word = game.checkWin()
    let errors = game.errors + " / " + game.maxErrors

    document.querySelector(".image-box img").src = `src/assets/images/u${game.errors}.png`
    
    document.querySelector("#errors").innerHTML = errors
    
    if(word == null){
        popup.style.display = "flex"
        popup.classList.add("lose")
        popup_title.innerHTML = messages[0]
        popup_subtitle.innerHTML = `La parola era: ${game.word}`
        return
    }
    document.querySelector(".word-box span").innerHTML = word
}

