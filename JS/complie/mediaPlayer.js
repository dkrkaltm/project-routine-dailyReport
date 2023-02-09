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
            NavFCT.seekBarShow(e.target, this.#SeekBar);
        };
    }
};
const NavFCT = new class {
    constructor() { }
    player(text) {
        if (text === 'STOP') {
            MediaPlayer.stopVideo();
            return 'START';
        }
        else if (text === 'START') {
            MediaPlayer.setLoadVideo(CurrentWeather.getMediaData(), 30, 'default');
            return 'STOP';
        }
        else {
            console.error('error');
        }
    }
    seekBarShow(target, bar) {
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
    #SeekbarColor = document.querySelector('#seekBar-box-color');
    #SeekbarNumber = document.querySelector('#seekBar-box-number');
    #BoxRect;
    #beforeX = 0;
    #clientX_gab = 0;
    #leftVal = 0;
    #checkValue = 0;
    #percentValue = 0;
    constructor() {
        this.#SeekbarBTN.onmousedown = (e) => {
            e.preventDefault();
            this.#beforeX = e.clientX;
            document.onmousemove = (e) => {
                e.preventDefault();
                seekBarFCT.move(e, this.#SeekbarBox, this.#SeekbarBTN, this.#SeekbarColor, this.#SeekbarNumber);
            };
            document.onmouseup = (e) => {
                e.preventDefault();
                seekBarFCT.stop(e);
            };
        };
    }
    move(e, box, btn, color, number) {
        this.#BoxRect = box.getBoundingClientRect();
        this.#leftVal = e.pageX - this.#BoxRect.left;
        if (this.#leftVal > this.#BoxRect.width)
            this.#leftVal = this.#BoxRect.width;
        if (this.#leftVal < 0)
            this.#leftVal = 0;
        btn.style.left = this.#leftVal - 10 + 'px';
        this.#percentValue = this.#leftVal / this.#BoxRect.width * 100;
        color.style.width = this.#percentValue + "%";
        number.style.left = btn.style.left;
        number.style.opacity = '1';
        number.textContent = Math.floor(this.#percentValue) + '%';
        MediaPlayer.sound(this.#percentValue);
    }
    stop(e) {
        document.onmouseup = null;
        document.onmousemove = null;
    }
};
//# sourceMappingURL=mediaPlayer.js.map