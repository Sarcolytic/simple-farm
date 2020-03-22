import { Container, Graphics, Point } from 'pixi.js';
import { FieldSize } from '../../utils/GameConstants';
import { CellView } from './CellView';
import { FieldEvents } from '../../events/FieldEvents';

export class FieldView extends Container {
    constructor() {
        super();

        this._cells = [];
        for (let i = 0; i < FieldSize.WIDTH; i++) {
            this._cells[i] = [];
            for (let j = 0; j < FieldSize.HEIGHT; j++) {
                const cell = new CellView(new Point(i, j));
                cell.position.set(i * cell.width, j * cell.height);
                cell.on('pointertap', () => { this.onCellClicked(cell); });
                this.addChild(cell);
                this._cells[i].push(cell);
            }
        }

        const border = new Graphics()
            .lineStyle(1)
            .beginFill(0xa2653e)
            .drawRect(0, 0, this.width + 1, this.height + 1)
            .endFill();
        border.position.set(-1);
        this.addChildAt(border, 0);
    }

    /**
     * @param {PIXI.Point[]} cells
     */
    highlightCells(cells) {
        cells.forEach(({ x, y }) => {
            this._cells[x][y].highlight(true);
        });
    }

    hideHighlightCells() {
        for (let i = 0; i < FieldSize.WIDTH; i++) {
            for (let j = 0; j < FieldSize.HEIGHT; j++) {
                this._cells[i][j].highlight(false);
            }
        }
    }

    /**
     * @param {CellView} cell
     */
    onCellClicked(cell) {
        this.emit(FieldEvents.CELL_CLICK, cell.getFieldPosition());
    }

    /**
     * @param {PIXI.Point} position
     * @param {string} item
     */
    place({ x, y }, item) {
        this._cells[x][y].place(item);
    }
}
