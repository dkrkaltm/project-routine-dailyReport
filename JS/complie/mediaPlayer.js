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
        if (bar.classList.contains('hidden')) {
            bar.animate({
                opacity: [0, 1],
            }, {
                easing: "ease-in-out",
                fill: 'forwards',
                duration: 800,
            });
        }
        bar.classList.toggle('hidden');
        target.classList.toggle('strong');
    }
};
const seekBarFCT = new class {
    #SeekbarBox = document.querySelector('#seekBar-box');
    #SeekbarBTN = document.querySelector('#seekBar-box-btn');
    #beforeX = 0;
    #clientX_gab = 0;
    #leftVal = 0;
    #movingVal = 0;
    constructor() {
        this.#SeekbarBTN.onmousedown = (e) => {
            e.preventDefault();
            this.#beforeX = e.clientX;
            document.onmousemove = (e) => {
                e.preventDefault();
                seekBarFCT.move(e, this.#SeekbarBox, this.#SeekbarBTN);
            };
            document.onmouseup = (e) => {
                e.preventDefault();
                seekBarFCT.stop(e);
            };
        };
    }
    move(e, box, btn) {
        console.log('e', e);
        this.#clientX_gab = e.clientX - this.#beforeX;
        this.#beforeX = e.clientX;
        this.#movingVal = btn.offsetLeft + this.#clientX_gab;
        if (this.#movingVal < 0) {
            this.#leftVal = 0;
            console.log(this.#movingVal, box.offsetLeft, box.clientWidth);
        }
        else if (this.#movingVal >= box.clientWidth) {
            this.#leftVal = box.clientWidth;
        }
        else {
            this.#leftVal = this.#movingVal;
        }
        btn.style.left = this.#leftVal + "px";
        console.log(btn.style.left);
    }
    stop(e) {
        document.onmouseup = null;
        document.onmousemove = null;
    }
};
//# sourceMappingURL=mediaPlayer.js.map