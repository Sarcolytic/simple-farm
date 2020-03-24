import { ResourceView } from './ResourceView';
import { ResourceTypes } from '../../model/ResourceTypes';

export class WheatResourceView extends ResourceView {
    constructor() {
        super(ResourceTypes.WHEAT);
    }


    addValue(num) {
        this._value.add(num);

        if (this._value.getCurrent() > 0) {
            this.interactive = true;
            this.buttonMode = true;
        } else {
            this.interactive = false;
        }
    }
}
