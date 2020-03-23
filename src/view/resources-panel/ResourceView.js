import { Container, Sprite } from 'pixi.js';
import Assets from '../../utils/Assets';
import { ResourceCounter } from './ResourceCounter';

export class ResourceView extends Container {
    /**
     * @param {string} resourceType
     */
    constructor(resourceType) {
        super();

        const resource = new Sprite(Assets.texture(resourceType));
        resource.anchor.set(0.5);
        this.addChild(resource);

        this._counter = new ResourceCounter();
        this._counter.position.set(20, -20);
        this.addChild(this._counter);
    }
}
