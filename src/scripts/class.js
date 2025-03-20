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