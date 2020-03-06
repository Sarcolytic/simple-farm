import { Container, Sprite } from 'pixi.js';
import Assets from '../../utils/Assets';
import { gsap, Power2 } from 'gsap';

export class ControlPanelItemView extends Container {
    /**
     * @param {string} iconId
     */
    constructor(iconId) {
        super();

        const icon = new Sprite(Assets.texture(iconId));
        icon.anchor.set(0.5);
        this.addChild(icon);

        icon.interactive = true;
        icon.buttonMode = true;
        icon.on('pointerover', this.onPointerOver, this);
        icon.on('pointerout', this.onPointerOut, this);
        icon.on('pointertap', this.onPointerTap, this);
    }

    onPointerOver() {
        this.killActiveTween();

        const tweenTarget = { scale: this.scale.x };
        this._activeTween = gsap.to(tweenTarget, {
            scale: 1.3,
            duration: 0.2,
            ease: Power2.easeOut,
            onUpdate: () => {
                this.scale.set(tweenTarget.scale);
            },
        });
    }

    onPointerOut() {
        this.killActiveTween();

        const tweenTarget = { scale: this.scale.x };
        this._activeTween = gsap.to(tweenTarget, {
            scale: 1,
            duration: 0.2,
            ease: Power2.easeOut,
            onUpdate: () => {
                this.scale.set(tweenTarget.scale);
            },
        });
    }

    onPointerTap() {
        this.killActiveTween();
    }

    killActiveTween() {
        if (this._activeTween !== undefined) {
            this._activeTween.kill();
        }
    }
}
