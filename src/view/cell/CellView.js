import { Container, Graphics, Rectangle, Sprite, Texture } from 'pixi.js';

export class CellView extends Container {
    static SIZE = 45;

    constructor() {
        super();

        const border = new Graphics()
            .lineStyle(1)
            .drawRect(0, 0, CellView.SIZE, CellView.SIZE);
        this.addChild(border);

        this.createOverState();
        this.interactive = true;
        this.hitArea = new Rectangle(0, 0, CellView.SIZE, CellView.SIZE);
        this.on('pointerover', () => { this._over.visible = true; });
        this.on('pointerout', () => { this._over.visible = false; });
    }

    createOverState() {
        this._over = new Sprite(Texture.WHITE);
        this._over.width = CellView.SIZE;
        this._over.height = CellView.SIZE;
        this._over.tint = 0x2ecc40;
        this._over.alpha = 0.5;
        this._over.visible = false;
        this.addChild(this._over);
    }
}
