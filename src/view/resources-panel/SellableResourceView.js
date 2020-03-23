import { ResourceView } from './ResourceView';
import { SellButton } from './SellButton';

export class SellableResourceView extends ResourceView{
    /**
     * @param {string} resourceType
     */
    constructor(resourceType) {
        super(resourceType);

        this._sellButton = new SellButton();
        this.addChild(this._sellButton);
        this._sellButton.position.set(-Math.round(this._sellButton.width / 2), 15);
    }
}
