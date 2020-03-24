import { utils } from 'pixi.js';
import { PanelEvents } from '../events/PanelEvents';

export class BasePanelController extends utils.EventEmitter{
    /**
     * @param {BasePanelModel} model
     * @param {BasePanelView} view
     */
    constructor(model, view) {
        super();

        this._model = model;
        this._view = view;

        view.on(PanelEvents.ITEM_SELECTED, this.onItemSelected, this);
    }

    /**
     * @param {string} id
     */
    onItemSelected(id) {
        const prev = this._model.getSelected();

        let isReset = false;
        if (prev === id) {
            this._model.resetSelected();
            isReset = true;
        } else {
            this._model.setSelected(id);
        }

        this._view.updateSelection(prev, this._model.getSelected());

        this.emit(isReset ? PanelEvents.RESET_SELECTION : PanelEvents.ITEM_SELECTED);
    }

    resetSelected() {
        this._view.updateSelection(this._model.getSelected(), undefined);
        this._model.resetSelected();
    }

    /**
     * @return {string|undefined}
     */
    getSelected() {
        return this._model.getSelected();
    }
}
