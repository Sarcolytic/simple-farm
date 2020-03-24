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

        this._fieldPosition = position;

        this.createHighlight();
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
        this.interactive = value;
    }

    getFieldPosition() {
        return this._fieldPosition;
    }

    /**
     * @param {PIXI.Container} item
     */
    place(item) {
        item.position.set(CellView.SIZE / 2, CellView.SIZE / 2);
        this.addChild(item);

        this._item = item;

        this.highlight(false);
    }

    eat() {
        this._item.eat();
    }
}
