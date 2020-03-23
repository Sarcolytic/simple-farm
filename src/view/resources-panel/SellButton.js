import { Container, Graphics, Text, TextStyle } from 'pixi.js';

export class SellButton extends Container {
    static states = {
        UP: 0,
        DOWN: 1,
        OVER: 2,
    }

    constructor() {
        super();

        this._states = [];
        const up = this.createBgState(0x8dc406);
        up.visible = true;
        this._states[SellButton.states.UP] = up;
        this._states[SellButton.states.DOWN] = this.createBgState(0x6b9501);
        this._states[SellButton.states.OVER] = this.createBgState(0xbfdf7c);
        this._currentState = 0;

        const labelStyle = new TextStyle({
            fontFamily: 'Open Sans',
            fontSize: 14,
            fill: 0xffffff,
        });
        const label = new Text('SELL', labelStyle);
        label.roundPixels = true;
        label.anchor.set(0.5);
        label.position.set(25, 10);
        this.addChild(label);

        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerover', () => { this.setState(SellButton.states.OVER); });
        this.on('pointerdown', () => { this.setState(SellButton.states.DOWN); });
        this.on('pointerup', () => { this.setState(SellButton.states.UP); });
        this.on('pointerout', () => { this.setState(SellButton.states.UP); });
    }

    createBgState(color) {
        const state = new Graphics()
            .beginFill(color)
            .drawRoundedRect(0, 0, 50, 20, 10)
            .endFill();
        this.addChild(state);
        state.visible = false;
        return state;
    }

    setState(newState) {
        if (this._currentState === newState) {
            return;
        }

        this._states[this._currentState].visible = false;
        this._states[newState].visible = true;
        this._currentState = newState;
    }
}
