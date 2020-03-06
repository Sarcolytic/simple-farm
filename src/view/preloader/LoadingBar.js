import { Container, Graphics, Sprite, Texture } from 'pixi.js';

export class LoadingBar extends Container {
    constructor() {
        super();

        this._progress = new Sprite(Texture.WHITE);
        this._progress.tint = 0xffffff;
        this._progress.height = 10;
        this._progress.width = 0;
        this.addChild(this._progress);

        const bg = new Graphics();
        bg.lineStyle(2, 0xffffff);
        bg.drawRect(0, 0, 300, 10);
        this.addChild(bg);
    }

    /**
     *
     * @param {number} value
     */
    setProgress(value) {
        this._progress.width = Math.floor(value * 300);
    }
}
