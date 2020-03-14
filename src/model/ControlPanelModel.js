export class ControlPanelModel {
    /**
     * @param {string} value
     */
    setSelected(value) {
        this._selected = value;
    }

    /**
     * @return {string|undefined}
     */
    getSelected() {
        return this._selected;
    }

    resetSelected() {
        this._selected = undefined;
    }
}
