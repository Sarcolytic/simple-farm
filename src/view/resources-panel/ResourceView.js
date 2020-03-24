import { Container, Sprite } from 'pixi.js';
import Assets from '../../utils/Assets';
import { ResourceValue } from './ResourceValue';

export class ResourceView extends Container {
    /**
     * @param {string} resourceType
     */
    constructor(resourceType) {
        super();

        this._icon = new Sprite(Assets.texture(resourceType));
        this._icon.anchor.set(0.5);
        this.addChild(this._icon);

        this._value = new ResourceValue();
        this._value.position.set(20, -20);
        this.addChild(this._value);

        this._selected = false;
    }

    addValue(num) {
        this._value.add(num);
    }

    toggleSelected() {
        this._selected = !this._selected;

        this._icon.scale.set(this._selected ? 1.3 : 1);
    }
}
