const NavEvent = new class {
    #Button = document.querySelector("#media-player-button");
    #ButtonLabel = document.querySelector('#media-player-buttonL');
    #Source = document.querySelector("#media-player-source");
    #Volume = document.querySelector("#media-player-volume");
    #SeekBar = document.querySelector("#seekBar");
    constructor() {
        this.#Button.onclick = () => {
            this.#ButtonLabel.innerText = NavFCT.player(this.#ButtonLabel.innerText);
        };
        this.#Source.onclick = () => {
            window.open(CurrentWeather.getSourceData());
        };
        this.#Volume.onclick = (e) => {
            console.log(typeof (e.target));
            e.target.style.color != 'tomato' ? NavFCT.seekBarShow(e.target, this.#SeekBar, 'tomato') : NavFCT.seekBarShow(e.target, this.#SeekBar, 'white');
        };
    }
};
const NavFCT = new class {
    constructor() { }
    player(text) {
        if (text === 'STOP') {
            stopVideo();
            return 'START';
        }
        else if (text === 'START') {
            player.loadVideoById(CurrentWeather.getMediaData(), 30, 'default');
            return 'STOP';
        }
        else {
            console.error('error');
        }
    }
    seekBarShow(target, bar, color) {
        if (color === 'tomato') {
            target.style.color = color;
            bar.className = '';
            bar.animate({
                opacity: [0, 1],
            }, {
                easing: "ease-in-out",
                fill: 'forwards',
                duration: 800,
            });
        }
        else {
            target.style.color = color;
            bar.className = 'hidden';
        }
    }
};
//# sourceMappingURL=mediaPlayer.js.map