import { Loader } from 'pixi.js';

class Assets {
    /**
     * @return {Promise}
     */
    load() {
        const id = 'texture';
        const loader = new Loader();
        loader.add(
            id,
            'img/texture.json',
            undefined,
            () => {
                this._textures = { ...loader.resources[id].textures };
            },
        );

        return new Promise((resolve) => {
            loader.load(resolve);
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
