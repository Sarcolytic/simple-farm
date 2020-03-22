import { FieldSize } from '../utils/GameConstants';
import { CellModel } from './CellModel';
import { Point } from 'pixi.js';

export class FieldModel {
    constructor() {
        this._cells = [];
        for (let i = 0; i < FieldSize.WIDTH; i++) {
            for (let j = 0; j < FieldSize.HEIGHT; j++) {
                const cell = new CellModel(new Point(i, j));
                this._cells.push(cell);
            }
        }
    }

    getEmptyPositions() {
        const empty =  this._cells.filter(cell => cell.isEmpty());
        return empty.map(cell => cell.getPosition());
    }

    /**
     * @param {PIXI.Point} position
     * @param {string} item
     */
    place({ x, y }, item) {
        const cell = this.getCellByPosition(x, y);
        if (cell) {
            cell.place(item);
        }
    }

    /**
     * @param {number} row
     * @param {number} column
     * @return {CellModel|undefined}
     */
    getCellByPosition(row, column) {
        return this._cells.find(cell => {
            const { x, y } = cell.getPosition();
            return x === row && y === column;
        });
    }
}
