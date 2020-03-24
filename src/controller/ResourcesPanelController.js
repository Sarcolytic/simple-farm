import { BasePanelController } from './BasePanelController';
import { PanelEvents } from '../events/PanelEvents';

export class ResourcesPanelController extends BasePanelController {
    /**
     * @param {BasePanelModel} model
     * @param {ResourcesPanelView} view
     */
    constructor(model, view) {
        super(model, view);

        view.on(PanelEvents.RESET_SELECTION, () => { this.emit(PanelEvents.RESET_SELECTION); });
    }

    /**
     * @param {string} itemType
     * @param {number} num
     */
    addItemValue(itemType, num) {
        this._view.addItemValue(itemType, num);
    }

    /**
     * @param {string} itemType
     */
    decreaseItemValue(itemType) {
        this._view.addItemValue(itemType, -1);
    }
}
