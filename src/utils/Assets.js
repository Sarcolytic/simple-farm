import { Loader } from 'pixi.js';

class Assets {
    constructor() {
        this._loader = new Loader();
    }

    /**
     * @return {Promise}
     */
    load() {
        this._loader.add(
            'texture',
            'img/texture.json',
            undefined,
            () => {
                this._textures = { ...this._loader.resources['texture'].textures };
            },
        );

        return new Promise((resolve) => {
            this._loader.load(resolve);
        });
    }

    /**
     * @param {string} id
     * @return {PIXI.Texture}
     */
    texture(id) {
        return this._textures[id];
    }
}

// eslint-disable-next-line import/no-default-export
export default new Assets();
