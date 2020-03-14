import { ControlPanelView } from '../view/control-panel/ControlPanelView';

export class ControlPanelController {
    /**
     * @param {ControlPanelModel} model
     * @param {ControlPanelView} view
     */
    constructor(model, view) {
        this._model = model;
        this._view = view;

        view.on(ControlPanelView.EVENT_ITEM_SELECTED, this.onItemSelected, this);
    }

    /**
     * @param {string} id
     */
    onItemSelected(id) {
        const prev = this._model.getSelected();

        if (prev === id) {
            this._model.resetSelected();
        } else {
            this._model.setSelected(id);
        }

        this._view.updateSelection(prev, this._model.getSelected());
    }
}
