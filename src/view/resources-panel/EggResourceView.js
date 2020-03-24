import { SellableResourceView } from './SellableResourceView';
import { ResourceTypes } from '../../model/ResourceTypes';

export class EggResourceView extends SellableResourceView {
    constructor() {
        super(ResourceTypes.EGG, 10);
    }
}
