import { Container, Graphics, Text, TextStyle } from 'pixi.js';

export class ResourceValue extends Container {
    constructor() {
        super();

        const bg = new Graphics()
            .beginFill(0xff0000)
            .drawCircle(0, 0, 15)
            .endFill();
        this.addChild(bg);

        const textStyle = new TextStyle({
            fontFamily: 'Open Sans',
            fontSize: 14,
            fill: 0xffffff,
        });
        this._value = new Text('0', textStyle);
        this._value.anchor.set(0.5);
        this._value.roundPixels = true;
        this.addChild(this._value);

        this._currentValue = 0;
    }

    add(num) {
        this._currentValue += num;

        this._value.text = this._currentValue.toString();
    }

    /**
     * @return {number}
     */
    getCurrent() {
        return this._currentValue;
    }
}
