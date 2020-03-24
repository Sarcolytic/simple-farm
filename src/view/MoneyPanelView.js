import { Container, Text, TextStyle } from 'pixi.js';
import GameEventEmitter from '../utils/GameEventEmitter';
import { PanelEvents } from '../events/PanelEvents';

export class MoneyPanelView extends Container {
    constructor() {
        super();

        const textStyle = new TextStyle({
            fontFamily: 'Open Sans',
            fontSize: 20,
            fill: 0x0000ff,
        });
        this._text = new Text('$ 0', textStyle);
        this._text.roundPixels = true;
        this._text.anchor.x = 0.5;
        this.addChild(this._text);

        this._current = 0;

        GameEventEmitter.on(PanelEvents.ITEM_SOLD, this.onItemSold, this);
    }

    onItemSold(cost) {
        this._current += cost;
        this._text.text = `$ ${this._current}`;
    }
}
