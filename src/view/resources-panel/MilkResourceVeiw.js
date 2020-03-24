import { SellableResourceView } from './SellableResourceView';
import { ResourceTypes } from '../../model/ResourceTypes';

export class MilkResourceView extends SellableResourceView {
    constructor() {
        super(ResourceTypes.MILK, 100);
    }
}
