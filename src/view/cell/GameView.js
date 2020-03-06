import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { GameSize } from '../../utils/GameConstants';
import { CellView } from './CellView';

export class GameView extends Container {
    constructor() {
        super();

        const bg = new Sprite(Texture.WHITE);
        bg.tint = 0xc3cfe2;
        bg.width = GameSize.WIDTH;
        bg.height = GameSize.HEIGHT;
        this.addChild(bg);

        this.createField(8, 8);
    }

    /**
     * @param {number} width
     * @param {number} height
     */
    createField(width, height) {
        const container = new Container();
        this.addChild(container);

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const cell = new CellView();
                cell.position.set(i * cell.width, j * cell.height);
                container.addChild(cell);
            }
        }

        container.position.set(
            (GameSize.WIDTH - container.width) * 0.5,
            (GameSize.HEIGHT - container.height) * 0.5,
        );

        const border = new Graphics()
            .lineStyle(1)
            .beginFill(0xa2653e)
            .drawRect(0, 0, container.width + 1, container.height + 1)
            .endFill();
        border.position.set(-1);
        container.addChildAt(border, 0);

    }
}
