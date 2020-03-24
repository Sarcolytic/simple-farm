import { FieldEvents } from '../events/FieldEvents';
import { utils } from 'pixi.js';

export class FieldController extends utils.EventEmitter {
    /**
     * @param {FieldModel} model
     * @param {FieldView} view
     */
    constructor(model, view) {
        super();

        this._model = model;
        this._view = view;

        this._view.on(FieldEvents.CELL_CLICK, this.onCellClicked, this);
    }

    showEmptyCells() {
        const emptyCells = this._model.getEmptyPositions();
        if (emptyCells.length > 0) {
            this._view.highlightCells(emptyCells);
        }
    }

    showCanEatCells() {
        const cells = this._model.getCellsCanEat();
        if (cells.length > 0) {
            this._view.highlightCells(cells);
        }
    }

    hideCellsHighlight() {
        this._view.hideHighlightCells();
    }

    onCellClicked(position) {
        this._clickedPosition = position;

        this.emit(FieldEvents.CELL_CLICK);
    }

    /**
     * @param {string} item
     */
    placeItem(item) {
        this._model.place(this._clickedPosition, item);
        this._view.place(this._clickedPosition, item);

        this._clickedPosition = undefined;
    }

    startEating() {
        this._view.startEating(this._clickedPosition);
    }
}
