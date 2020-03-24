import { FieldModel } from '../model/FieldModel';
import { FieldController } from './FieldController';
import { PanelEvents } from '../events/PanelEvents';
import { FieldEvents } from '../events/FieldEvents';
import { ResourcesPanelController } from './ResourcesPanelController';
import GameEventEmitter from '../utils/GameEventEmitter';
import { BasePanelController } from './BasePanelController';
import { BasePanelModel } from '../model/BasePanelModel';

export class GameController {
    /**
     * @param {GameView} view
     */
    constructor(view) {
        this._view = view;

        this._controlPanelController = new BasePanelController(
            new BasePanelModel(),
            this._view.getControlPanel(),
        );
        this._controlPanelController.on(PanelEvents.ITEM_SELECTED, this.onControlPanelItemSelected, this);
        this._controlPanelController.on(PanelEvents.RESET_SELECTION, this.onPanelReset, this);

        this._fieldController = new FieldController(
            new FieldModel(),
            this._view.getField(),
        );
        this._fieldController.on(FieldEvents.CELL_CLICK, this.onFieldCellClicked, this);

        this._resourcesPanelController = new ResourcesPanelController(
            new BasePanelModel(),
            this._view.getResourcesPanel(),
        );
        this._resourcesPanelController.on(PanelEvents.ITEM_SELECTED, this.onResourcePanelItemSelected, this);
        this._resourcesPanelController.on(PanelEvents.RESET_SELECTION, this.onPanelReset, this);

        GameEventEmitter.on(FieldEvents.ITEM_COLLECTED, this.onFieldItemCollected, this);
    }

    onControlPanelItemSelected() {
        this._resourcesPanelController.resetSelected();
        this._fieldController.hideCellsHighlight();
        this._fieldController.showEmptyCells();
    }

    onPanelReset() {
        this._fieldController.hideCellsHighlight();
    }

    onResourcePanelItemSelected() {
        this._controlPanelController.resetSelected();
        this._fieldController.hideCellsHighlight();
        this._fieldController.showCanEatCells();
    }

    onFieldCellClicked() {
        if (this._controlPanelController.hasSelected()) {
            this._fieldController.placeItem(this._controlPanelController.getSelected());
        } else if (this._resourcesPanelController.hasSelected()) {
            this._resourcesPanelController.addItemValue(this._resourcesPanelController.getSelected(), -1);
            this._fieldController.startEating();
        }
    }

    onFieldItemCollected(itemType) {
        this._resourcesPanelController.addItemValue(itemType, 1);
    }
}
