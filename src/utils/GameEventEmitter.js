import { utils } from 'pixi.js';

class GameEventEmitter extends utils.EventEmitter {}

// eslint-disable-next-line import/no-default-export
export default new GameEventEmitter();
