class AudioManager{
    constructor(){
    }

    addAudio(name, src){
        const new_audio = document.createElement("audio")
        new_audio.src = src
        new_audio.id = name
        document.body.append(new_audio)
    }

    playAudio(name, volume){
        document.querySelectorAll("audio").forEach(el => {
            if(el.id == name && isFinite(Number(volume))){
                el.volume = Number(volume);
                el.play();
            }
        });
    }
}

class PageManager{
    constructor(){
        this.pagesIDs = []
    }

    addPageID(id){
        this.pagesIDs.push(id)
    }

    goToPageID(id){
        this.pagesIDs.forEach(el => {
            if(el != id){
                document.getElementById(el).style.display = "none"
            } else {
                document.getElementById(el).style.display = "flex"
            }
        });
    }
}


class Game{
    constructor(){
        this.maxErrors = 5
        this.errors = 0
        this.word = ""
        this.guessedLetters = []
    }

    checkLetter(letter){
        for(let l of this.word){
            if(l == letter){
                this.guessedLetters.push(l)
                return true
            }
        }
        this.errors++
        return false
    }

    

    checkWin(){
        if(this.errors >= this.maxErrors){
            return null
        }

        let result = ""
        for (let l of this.word) {
            let toAppend = "_"
            if (this.guessedLetters.includes(l)) {
                toAppend = l
            }
            result+=toAppend
        }

        return result
    }

    setMaxErrors(amount){
        this.maxErrors = amount
    }

    setWord(word){
        this.word = word
    }

    getWord(){
        return this.word
    }

    reset(){
        this.maxErrors = 5
        this.errors = 0
        this.word = ""
        this.guessedLetters = []
    }
}



