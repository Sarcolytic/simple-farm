import { Container, Sprite } from 'pixi.js';
import Assets from '../../utils/Assets';
import { gsap, Power3 } from 'gsap';
import GameEventEmitter from '../../utils/GameEventEmitter';
import { FieldEvents } from '../../events/FieldEvents';
import { ResourceTypes } from '../../model/ResourceTypes';

export class WheatFieldItemView extends Container {
    static GROW_TIME = 10;

    constructor() {
        super();

        this._wheat = new Sprite(Assets.texture('wheat'));
        this._wheat.anchor.set(0.5);
        this._wheat.scale.set(0);
        this.addChild(this._wheat);

        this._wheatDone = new Sprite(Assets.texture('wheat_done'));
        this._wheatDone.anchor.set(0.5);
        this._wheatDone.visible = false;
        this.addChild(this._wheatDone);

        this.startGrow();
    }

    startGrow() {
        gsap.to(this._wheat.scale, {
            x: 1, y: 1, ease: Power3.easeOut, duration: WheatFieldItemView.GROW_TIME,
            onComplete: this.onGrew,
        });
    }

    onGrew = () => {
        this._wheat.scale.set(0);
        this._wheatDone.visible = true;

        this.interactive = true;
        this.once('pointertap', this.onClicked, this);
    };

    onClicked() {
        this._wheatDone.visible = false;
        this.interactive = false;

        this.startGrow();

        GameEventEmitter.emit(FieldEvents.ITEM_COLLECTED, ResourceTypes.WHEAT);
    }
}
