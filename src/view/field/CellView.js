import { Container, Graphics, Rectangle, Sprite, Texture } from 'pixi.js';

export class CellView extends Container {
    static SIZE = 45;

    /**
     * @param {PIXI.Point} position
     */
    constructor(position) {
        super();

        const border = new Graphics()
            .lineStyle(1)
            .drawRect(0, 0, CellView.SIZE, CellView.SIZE);
        this.addChild(border);

        this._position = position;

        this.createHighlight();
        this.interactive = true;
        this.hitArea = new Rectangle(0, 0, CellView.SIZE, CellView.SIZE);
    }

    createHighlight() {
        this._highlight = new Sprite(Texture.WHITE);
        this._highlight.width = CellView.SIZE;
        this._highlight.height = CellView.SIZE;
        this._highlight.tint = 0x2ecc40;
        this._highlight.alpha = 0.5;
        this._highlight.visible = false;
        this.addChild(this._highlight);
    }

    highlight(value) {
        this._highlight.visible = value;
    }
}
