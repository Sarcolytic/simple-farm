import { Container, Graphics } from 'pixi.js';
import { ControlPanelItemView } from './ControlPanelItemView';

export class ControlPanelView extends Container {
    constructor() {
        super();

        const bg = new Graphics()
            .beginFill(0xdaf7a6)
            .drawRoundedRect(0, 0, 202, 40, 10)
            .endFill();
        this.addChild(bg);

        this.createItems();
    }

    createItems() {
        this._items = ['wheat', 'chicken', 'cow'].map((iconId, index) => {
            const item = new ControlPanelItemView(iconId);
            item.x = index * 68 + 33;
            this.addChild(item);
            return item;
        });
    }
}
