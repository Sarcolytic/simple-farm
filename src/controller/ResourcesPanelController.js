import { BasePanelController } from './BasePanelController';

export class ResourcesPanelController extends BasePanelController {
    /**
     * @param {BasePanelModel} model
     * @param {ResourcesPanelView} view
     */
    constructor(model, view) {
        super(model, view);
    }

    /**
     * @param {string} itemType
     * @param {number} num
     */
    addItemValue(itemType, num) {
        this._view.addItemValue(itemType, num);
    }
}
