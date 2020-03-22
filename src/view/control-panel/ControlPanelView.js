import { Container, Graphics } from 'pixi.js';
import { ControlPanelItemView } from './ControlPanelItemView';
import { ControlPanelItems } from '../../model/ControlPanelItems';
import { ControlPanelEvents } from '../../events/ControlPanelEvents';

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
        this._items = new Map();
        Object.values(ControlPanelItems).forEach((id, index) => {
            const item = new ControlPanelItemView(id);
            item.x = index * 68 + 33;
            item.interactive = true;
            item.buttonMode = true;
            item.on('pointertap', () => {
                this.emit(ControlPanelEvents.ITEM_SELECTED, id);
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
