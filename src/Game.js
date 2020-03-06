import { Application, Ticker } from 'pixi.js';
import gsap from 'gsap';
import { GameSize } from './utils/GameConstants';
import { PreloaderView } from './view/preloader/PreloaderView';

class Game {
    constructor() {
        this._app = new Application({
            width: GameSize.WIDTH,
            height: GameSize.HEIGHT,
            backgroundColor: 0xa2653e,
            view: document.getElementById('game'),
        });

        Ticker.shared.autoStart = false;
        this._app.ticker.stop();
        gsap.ticker.add(() => {
            this._app.ticker.update();
        });

        this._app.view.addEventListener('contextmenu', event => event.preventDefault());

        this.startLoading();
    }

    startLoading() {
        this._preloader = new PreloaderView();
        this._app.stage.addChild(this._preloader);
        this._preloader.on(PreloaderView.EVENT_LOADED, this.onLoaded, this);
        this._preloader.emulateLoading();
    }

    onLoaded() {
        this._app.stage.removeChild(this._preloader);
    }
}

window.onload = () => {
    new Game();
};
