import { Application, Ticker } from 'pixi.js';
import gsap from 'gsap';

class Game {
    constructor() {
        this._app = new Application({
            width: 800,
            height: 600,
            backgroundColor: 0xa2653e,
            view: document.getElementById('game'),
        });

        Ticker.shared.autoStart = false;
        this._app.ticker.stop();
        gsap.ticker.add(() => {
            this._app.ticker.update();
        });

        this._app.view.addEventListener('contextmenu', event => event.preventDefault());
    }
}

window.onload = () => {
    new Game();
};
