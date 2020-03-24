import { FieldItemTypes } from '../../model/FieldItemTypes';
import { WheatFieldItemView } from './WheatFieldItemView';
import { ChickenFieldItemView } from './ChickenFieldItemView';
import { CowFieldItemView } from './CowFieldItemView';

export class FieldItemsFactory {
    static create(itemType) {
        let item;
        switch (itemType) {
            case FieldItemTypes.WHEAT:
                item = new WheatFieldItemView();
                break;
            case FieldItemTypes.CHICKEN:
                item = new ChickenFieldItemView();
                break;
            case FieldItemTypes.COW:
                item = new CowFieldItemView();
                break;
            default:
                throw new Error(`${itemType}is unsupported!`);
        }
        return item;
    }
}
