import { Container, Sprite, Texture } from 'pixi.js';
import { GameSize } from '../utils/GameConstants';
import { ControlPanelView } from './control-panel/ControlPanelView';
import { FieldView } from './field/FieldView';

export class GameView extends Container {
    constructor() {
        super();

        const bg = new Sprite(Texture.WHITE);
        bg.tint = 0xc3cfe2;
        bg.width = GameSize.WIDTH;
        bg.height = GameSize.HEIGHT;
        this.addChild(bg);

        this.createField();
        this.createControlPanel();
    }

    createField() {
        this._field = new FieldView();
        this.addChild(this._field);

        this._field.position.set(
            (GameSize.WIDTH - this._field.width) * 0.5,
            (GameSize.HEIGHT - this._field.height) * 0.5,
        );
    }

    createControlPanel() {
        this._controlPanel = new ControlPanelView();
        this._controlPanel.position.set(
            (GameSize.WIDTH - this._controlPanel.width) * 0.5,
            GameSize.HEIGHT - 30,
        );
        this.addChild(this._controlPanel);
    }

    /**
     * @return {ControlPanelView}
     */
    getControlPanel() {
        return this._controlPanel;
    }

    /**
     * @return {FieldView}
     */
    getField() {
        return this._field;
    }
}
