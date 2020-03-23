import { Container } from 'pixi.js';
import { ResourceTypes, SellableResources } from '../../model/ResourceTypes';
import { ResourceView } from './ResourceView';
import { SellableResourceView } from './SellableResourceView';

export class ResourcesPanelView extends Container {
    constructor() {
        super();

        Object.values(ResourceTypes).forEach((type, index) => {
            let resource;
            if (SellableResources.includes(type)) {
                resource = new SellableResourceView(type);
            } else {
                resource = new ResourceView(type);
            }
            resource.y = index * 80;
            this.addChild(resource);
        });
    }
}
