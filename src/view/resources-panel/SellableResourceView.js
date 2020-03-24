import { ResourceView } from './ResourceView';
import { SellButton } from './SellButton';

export class SellableResourceView extends ResourceView{
    /**
     * @param {string} resourceType
     * @param {number} cost
     */
    constructor(resourceType, cost) {
        super(resourceType);

        this._cost = cost;

        this._sellButton = new SellButton(cost);
        this.addChild(this._sellButton);
        this._sellButton.position.set(-Math.round(this._sellButton.width / 2), 15);
    }

    /**
     * @return {number}
     */
    getCost() {
        return this._cost;
    }
}
