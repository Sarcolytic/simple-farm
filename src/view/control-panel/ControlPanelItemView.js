import { Container, Sprite } from 'pixi.js';
import Assets from '../../utils/Assets';

export class ControlPanelItemView extends Container {
    /**
     * @param {string} iconId
     */
    constructor(iconId) {
        super();

        const icon = new Sprite(Assets.texture(iconId));
        icon.anchor.set(0.5);
        this.addChild(icon);

        this._selected = false;
    }

    toggleSelected() {
        this._selected = !this._selected;

        this.scale.set(this._selected ? 1.3 : 1);
    }
}
