import { ResourceTypes } from '../../model/ResourceTypes';
import { WheatResourceView } from './WheatResourceView';
import { MilkResourceView } from './MilkResourceVeiw';
import { EggResourceView } from './EggResourceView';

export class ResourcesFactory {
    static create(type) {
        let item;
        switch (type) {
            case ResourceTypes.WHEAT:
                item = new WheatResourceView();
                break;
            case ResourceTypes.MILK:
                item = new MilkResourceView();
                break;
            case ResourceTypes.EGG:
                item = new EggResourceView();
                break;
            default:
                throw new Error(`${type}is unsupported!`);
        }
        return item;
    }
}
