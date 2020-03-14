import { Application, Ticker } from 'pixi.js';
import gsap from 'gsap';
import { GameSize } from './utils/GameConstants';
import { PreloaderView } from './view/preloader/PreloaderView';
import { GameView } from './view/cell/GameView';
import { ControlPanelController } from './controller/ControlPanelController';
import { ControlPanelModel } from './model/ControlPanelModel';

class Game {
    constructor() {
        this._app = new Application({
            width: GameSize.WIDTH,
            height: GameSize.HEIGHT,
            backgroundColor: 0x000000,
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
        this._preloader.start();
    }

    onLoaded() {
        this._app.stage.removeChild(this._preloader);

        this._gameView = new GameView();
        this._app.stage.addChild(this._gameView);


        const controlPanelModel = new ControlPanelModel();
        new ControlPanelController(
            controlPanelModel,
            this._gameView.getControlPanel(),
        );
    }
}

window.onload = () => {
    new Game();
};
