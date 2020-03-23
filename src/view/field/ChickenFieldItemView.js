import { Container, Sprite } from 'pixi.js';
import Assets from '../../utils/Assets';

export class ChickenFieldItemView extends Container {
    constructor() {
        super();

        this._item = new Sprite(Assets.texture('chicken'));
        this._item.anchor.set(0.5);
        this.addChild(this._item);
    }
}
