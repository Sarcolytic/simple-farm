import { AnimalFieldItemView } from './AnimalFieldItemView';
import { FieldItemTypes } from '../../model/FieldItemTypes';
import GameEventEmitter from '../../utils/GameEventEmitter';
import { FieldEvents } from '../../events/FieldEvents';
import { ResourceTypes } from '../../model/ResourceTypes';

export class CowFieldItemView extends AnimalFieldItemView {
    constructor() {
        super(FieldItemTypes.COW, 20, 1);
    }

    onEatCompleted() {
        super.onEatCompleted();

        GameEventEmitter.emit(FieldEvents.ITEM_COLLECTED, ResourceTypes.MILK);
    }
}
