import { ResourceTypes } from '../../model/ResourceTypes';
import { ResourcesFactory } from './ResourcesFactory';
import { BasePanelView } from '../BasePanelView';
import { PanelEvents } from '../../events/PanelEvents';
import { WheatResourceView } from './WheatResourceView';

export class ResourcesPanelView extends BasePanelView {
    constructor() {
        super();

        this._items = new Map();
        Object.values(ResourceTypes).forEach((type, index) => {
            const resource = ResourcesFactory.create(type);
            resource.on('pointertap', () => {
                this.emit(PanelEvents.ITEM_SELECTED, type);
            });

            if (type === ResourceTypes.WHEAT) {
                resource.on(WheatResourceView.EVENT_RESOURCE_ENDED, () => {
                    this.emit(PanelEvents.RESET_SELECTION);
                });
            }

            this._items.set(type, resource);
            resource.y = index * 80;
            this.addChild(resource);
        });
    }

    /**
     * @param {string} itemType
     * @param {number} num
     */
    addItemValue(itemType, num) {
        if (!this._items.has(itemType)) {
            throw new Error(`${itemType} is not supported`);
        }

        this._items.get(itemType).addValue(num);
    }
}
