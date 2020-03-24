import { ResourceView } from './ResourceView';
import { SellButton } from './SellButton';
import GameEventEmitter from '../../utils/GameEventEmitter';
import { PanelEvents } from '../../events/PanelEvents';

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
        this._sellButton.on('pointertap', this.sell, this);
    }

    addValue(num) {
        super.addValue(num);

        this._sellButton.setEnabled(this._value.getCurrent() > 0);
    }

    sell() {
        this.addValue(-1);

        GameEventEmitter.emit(PanelEvents.ITEM_SOLD, this._cost);
    }
}
