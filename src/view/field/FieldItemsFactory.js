import { ControlPanelItems } from '../../model/ControlPanelItems';
import { WheatFieldItemView } from './WheatFieldItemView';
import { ChickenFieldItemView } from './ChickenFieldItemView';
import { CowFieldItemView } from './CowFieldItemView';

export class FieldItemsFactory {
    static create(itemType) {
        let item;
        switch (itemType) {
            case ControlPanelItems.WHEAT:
                item = new WheatFieldItemView();
                break;
            case ControlPanelItems.CHICKEN:
                item = new ChickenFieldItemView();
                break;
            case ControlPanelItems.COW:
                item = new CowFieldItemView();
                break;
            default:
                throw new Error(`${itemType}is unsupported!`);
        }
        return item;
    }
}
