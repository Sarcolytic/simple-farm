import { ControlPanelModel } from '../model/ControlPanelModel';
import { ControlPanelController } from './ControlPanelController';
import { FieldModel } from '../model/FieldModel';
import { FieldController } from './FieldController';
import { ControlPanelEvents } from '../events/ControlPanelEvents';

export class GameController {
    /**
     * @param {GameView} view
     */
    constructor(view) {
        this._view = view;

        this._controlPanelController = new ControlPanelController(
            new ControlPanelModel(),
            this._view.getControlPanel(),
        );
        this._controlPanelController.on(ControlPanelEvents.ITEM_SELECTED, this.onControlPanelItemSelected, this);
        this._controlPanelController.on(ControlPanelEvents.RESET_SELECTION, this.onControlPanelReset, this);

        this._fieldController = new FieldController(
            new FieldModel(),
            this._view.getField(),
        );
    }

    onControlPanelItemSelected() {
        this._fieldController.showEmptyCells();
    }

    onControlPanelReset() {
        this._fieldController.hideCellsHighlight();
    }
}
