import { Container, Sprite, Texture } from 'pixi.js';
import WebFont from 'webfontloader';
import { LoadingBar } from './LoadingBar';
import { GameSize } from '../../utils/GameConstants';
import Assets from '../../utils/Assets';

export class PreloaderView extends Container {
    static EVENT_LOADED = Symbol();

    constructor() {
        super();

        const bg = new Sprite(Texture.WHITE);
        bg.width = GameSize.WIDTH;
        bg.height = GameSize.HEIGHT;
        bg.tint = 0x3b8cbb;
        this.addChild(bg);

        this._progressBar = new LoadingBar();
        this._progressBar.position.set(
            (GameSize.WIDTH - this._progressBar.width) * 0.5,
            (GameSize.HEIGHT - this._progressBar.height) * 0.5,
        );
        this.addChild(this._progressBar);
    }

    async start() {
        this._progressBar.setProgress(0.5);
        await Assets.load();

        WebFont.load({
            custom: {
                families: ['Open Sans'],
                urls: ['fonts/fonts.css'],
            },
            active: () => {
                this._progressBar.setProgress(1);
                this.emit(PreloaderView.EVENT_LOADED);
            },
        });
    }
}
