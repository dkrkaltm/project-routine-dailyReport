"use strict";
//버튼 -> stop -> 정지 부르기, start -> 시작 부르기
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Button, _ButtonLabel, _Source, _Volume, _SeekBar, _a, _SeekbarBox, _SeekbarBTN, _SeekbarColor, _SeekbarNumber, _BoxRect, _BoxRect_1, _beforeX, _clientX_gab, _leftVal, _checkValue, _percentValue, _b;
const NavEvent = new (_a = class {
        constructor() {
            _Button.set(this, document.querySelector("#media-player-button"));
            _ButtonLabel.set(this, document.querySelector('#media-player-buttonL'));
            _Source.set(this, document.querySelector("#media-player-source"));
            _Volume.set(this, document.querySelector("#media-player-volume"));
            _SeekBar.set(this, document.querySelector("#seekBar"));
            __classPrivateFieldGet(this, _Button, "f").onclick = () => {
                __classPrivateFieldGet(this, _ButtonLabel, "f").innerText = NavFCT.player(__classPrivateFieldGet(this, _ButtonLabel, "f").innerText);
            };
            __classPrivateFieldGet(this, _Source, "f").onclick = () => {
                // window.location.href = CurrentWeather.getSourceData();
                window.open(CurrentWeather.getSourceData());
            };
            __classPrivateFieldGet(this, _Volume, "f").onclick = (e) => {
                NavFCT.seekBarShow(e.target, __classPrivateFieldGet(this, _SeekBar, "f"));
            };
        }
    },
    _Button = new WeakMap(),
    _ButtonLabel = new WeakMap(),
    _Source = new WeakMap(),
    _Volume = new WeakMap(),
    _SeekBar = new WeakMap(),
    _a);
/////////////////////////////////////////////
const NavFCT = new class {
    constructor() { }
    player(text) {
        if (text === 'STOP') {
            MediaPlayer.stopVideo();
            return 'START';
        }
        else if (text === 'START') {
            // player.playVideo();
            MediaPlayer.setLoadVideo(CurrentWeather.getMediaData(), 30, 'default');
            return 'STOP';
        }
        else {
            console.error('error');
        }
        return '0';
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
/////////////////////////////////////////////
const seekBarFCT = new (_b = class {
        #BoxRect;
        #BoxRect;
        constructor() {
            _SeekbarBox.set(this, document.querySelector('#seekBar-box'));
            _SeekbarBTN.set(this, document.querySelector('#seekBar-box-btn'));
            _SeekbarColor.set(this, document.querySelector('#seekBar-box-color'));
            _SeekbarNumber.set(this, document.querySelector('#seekBar-box-number'));
            _BoxRect_1.set(this, void 0);
            _BoxRect_1.set(this, void 0);
            _beforeX.set(this, 0);
            _clientX_gab.set(this, 0);
            _leftVal.set(this, 0);
            _checkValue.set(this, 0);
            _percentValue.set(this, 0);
            __classPrivateFieldGet(this, _SeekbarBTN, "f").onmousedown = (e) => {
                e.preventDefault();
                __classPrivateFieldSet(this, _beforeX, e.clientX, "f");
                document.onmousemove = (e) => {
                    e.preventDefault();
                    seekBarFCT.move(e, __classPrivateFieldGet(this, _SeekbarBox, "f"), __classPrivateFieldGet(this, _SeekbarBTN, "f"), __classPrivateFieldGet(this, _SeekbarColor, "f"), __classPrivateFieldGet(this, _SeekbarNumber, "f"));
                };
                document.onmouseup = (e) => {
                    e.preventDefault();
                    seekBarFCT.stop(e);
                };
            };
        }
        move(e, box, btn, color, number) {
            __classPrivateFieldSet(this, _BoxRect_1, box.getBoundingClientRect(), "f");
            __classPrivateFieldSet(this, _leftVal, e.pageX - __classPrivateFieldGet(this, _BoxRect_1, "f").left, "f");
            if (__classPrivateFieldGet(this, _leftVal, "f") > __classPrivateFieldGet(this, _BoxRect_1, "f").width)
                __classPrivateFieldSet(this, _leftVal, __classPrivateFieldGet(this, _BoxRect_1, "f").width, "f");
            if (__classPrivateFieldGet(this, _leftVal, "f") < 0)
                __classPrivateFieldSet(this, _leftVal, 0, "f");
            btn.style.left = __classPrivateFieldGet(this, _leftVal, "f") - 10 + 'px';
            __classPrivateFieldSet(this, _percentValue, __classPrivateFieldGet(this, _leftVal, "f") / __classPrivateFieldGet(this, _BoxRect_1, "f").width * 100, "f");
            color.style.width = __classPrivateFieldGet(this, _percentValue, "f") + "%";
            number.style.left = btn.style.left;
            number.style.opacity = '1';
            number.textContent = Math.floor(__classPrivateFieldGet(this, _percentValue, "f")) + '%';
            MediaPlayer.sound(__classPrivateFieldGet(this, _percentValue, "f"));
        }
        stop(e) {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    },
    _SeekbarBox = new WeakMap(),
    _SeekbarBTN = new WeakMap(),
    _SeekbarColor = new WeakMap(),
    _SeekbarNumber = new WeakMap(),
    _BoxRect = new WeakMap(),
    _BoxRect_1 = new WeakMap(),
    _beforeX = new WeakMap(),
    _clientX_gab = new WeakMap(),
    _leftVal = new WeakMap(),
    _checkValue = new WeakMap(),
    _percentValue = new WeakMap(),
    _b);
