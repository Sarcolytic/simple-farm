export class FieldController {
    /**
     * @param {FieldModel} model
     * @param {FieldView} view
     */
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    showEmptyCells() {
        const emptyCells = this._model.getEmptyPositions();
        if (emptyCells.length > 0) {
            this._view.highlightCells(emptyCells);
        }
    }

    hideCellsHighlight() {
        this._view.hideHighlightCells();
    }
}
