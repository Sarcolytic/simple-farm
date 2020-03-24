import { Container, Sprite, Texture } from 'pixi.js';
import Assets from '../../utils/Assets';
import { gsap } from 'gsap';

export class AnimalFieldItemView extends Container {
    constructor(itemId, eatingDuration) {
        super();

        this._item = new Sprite(Assets.texture(itemId));
        this._item.anchor.set(0.5);
        this.addChild(this._item);

        this._progress = new Sprite(Texture.WHITE);
        this._progress.width = 0;
        this._progress.height = 5;
        this._progress.tint = 0xff0000;
        this._progress.position.set(-22, 17);
        this.addChild(this._progress);

        this._eatingDuration = eatingDuration;
    }

    eat() {
        this._currentEatCount = 0;
        this._progress.width = 0;
        gsap.killTweensOf(this._progress);

        this.startEat();
    }

    startEat() {
        gsap.to(this._progress, {
            width: 44,
            duration: this._eatingDuration,
            onComplete: () => {
                this.onEatCompleted();
            },
        });
    }

    onEatCompleted() {
        this._currentEatCount += 1;
        this._progress.width = 0;
    }
}
