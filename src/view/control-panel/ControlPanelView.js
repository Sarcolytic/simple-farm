import { Graphics } from 'pixi.js';
import { ControlPanelItemView } from './ControlPanelItemView';
import { FieldItemTypes } from '../../model/FieldItemTypes';
import { PanelEvents } from '../../events/PanelEvents';
import { BasePanelView } from '../BasePanelView';

export class ControlPanelView extends BasePanelView {
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
        Object.values(FieldItemTypes).forEach((id, index) => {
            const item = new ControlPanelItemView(id);
            item.x = index * 68 + 33;
            item.interactive = true;
            item.buttonMode = true;
            item.on('pointertap', () => {
                this.emit(PanelEvents.ITEM_SELECTED, id);
            });
            this.addChild(item);

            this._items.set(id, item);
        });
    }
}
