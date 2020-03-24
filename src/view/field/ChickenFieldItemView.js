import { AnimalFieldItemView } from './AnimalFieldItemView';
import { FieldItemTypes } from '../../model/FieldItemTypes';
import GameEventEmitter from '../../utils/GameEventEmitter';
import { FieldEvents } from '../../events/FieldEvents';
import { ResourceTypes } from '../../model/ResourceTypes';

export class ChickenFieldItemView extends AnimalFieldItemView {
    constructor() {
        super(FieldItemTypes.CHICKEN, 10, 3);
    }

    onEatCompleted() {
        super.onEatCompleted();

        GameEventEmitter.emit(FieldEvents.ITEM_COLLECTED, ResourceTypes.EGG);

        if (this._currentEatCount < 3) {
            this.startEat();
        }
    }
}
