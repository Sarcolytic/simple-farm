import { Container } from 'pixi.js';

export class BasePanelView extends Container {
    updateSelection(prevItemId, newItemId) {
        if (prevItemId !== undefined) {
            this._items.get(prevItemId).toggleSelected();
        }

        if (newItemId !== undefined) {
            this._items.get(newItemId).toggleSelected();
        }
    }
}
