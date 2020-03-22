import { ControlPanelEvents } from '../events/ControlPanelEvents';
import { utils } from 'pixi.js';

export class ControlPanelController extends utils.EventEmitter {
    /**
     * @param {ControlPanelModel} model
     * @param {ControlPanelView} view
     */
    constructor(model, view) {
        super();

        this._model = model;
        this._view = view;

        view.on(ControlPanelEvents.ITEM_SELECTED, this.onItemSelected, this);
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

        this.emit(isReset ? ControlPanelEvents.RESET_SELECTION : ControlPanelEvents.ITEM_SELECTED);
    }
}
