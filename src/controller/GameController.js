import { ControlPanelModel } from '../model/ControlPanelModel';
import { ControlPanelController } from './ControlPanelController';
import { FieldModel } from '../model/FieldModel';
import { FieldController } from './FieldController';
import { ControlPanelEvents } from '../events/ControlPanelEvents';
import { FieldEvents } from '../events/FieldEvents';

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
        this._fieldController.on(FieldEvents.CELL_CLICK, this.onSomeCellClicked, this);
    }

    onControlPanelItemSelected() {
        this._fieldController.showEmptyCells();
    }

    onControlPanelReset() {
        this._fieldController.hideCellsHighlight();
    }

    onSomeCellClicked() {
        const selected = this._controlPanelController.getSelected();
        if (selected !== undefined) {
            this._fieldController.placeItem(selected);
        }
    }
}
