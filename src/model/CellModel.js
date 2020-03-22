export class CellModel {
    /**
     * @param {PIXI.Point} position
     */
    constructor(position) {
        this._position = position;
        this._isEmpty = true;
    }

    isEmpty() {
        return this._isEmpty;
    }

    getPosition() {
        return this._position;
    }
}
