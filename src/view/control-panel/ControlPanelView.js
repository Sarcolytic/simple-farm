import { Container, Graphics } from 'pixi.js';
import { ControlPanelItemView } from './ControlPanelItemView';
import { ControlPanelItems } from '../../model/ControlPanelItems';

export class ControlPanelView extends Container {
    static EVENT_ITEM_SELECTED = Symbol();

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
        this._items = new Map();
        Object.values(ControlPanelItems).forEach((id, index) => {
            const item = new ControlPanelItemView(id);
            item.x = index * 68 + 33;
            item.interactive = true;
            item.buttonMode = true;
            item.on('pointertap', () => {
                console.log('event');
                this.emit(ControlPanelView.EVENT_ITEM_SELECTED, id);
            });
            this.addChild(item);

            this._items.set(id, item);
        });
    }

    updateSelection(prevItemId, newItemId) {
        if (prevItemId !== undefined) {
            this._items.get(prevItemId).toggleSelected();
        }

        if (newItemId !== undefined) {
            this._items.get(newItemId).toggleSelected();
        }
    }
}
