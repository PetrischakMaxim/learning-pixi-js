export default class Button extends PIXI.Sprite {

    constructor(options = {}) {
        super(options.texture);
        this.options = this.setOptions(options);
        this.init();
    }

    setOptions(options) {
        const defaultOptions = {
            texture: null,
            label: null,
            x: 0,
            y: 0,
            state: 'default',
            disabled: false,
            active: false,
            action: null,
            visible: true
        };
        return Object.assign({}, defaultOptions, options);
    }

    init() {
        this.buttonMode = true;
        this.interactive = true;
        this.visible = this.options.visible;
        this.active = this.options.active;
        this.disabled = this.options.disabled;
    }

    updateTexture(texture) {
        this.texture = texture;
    }

    addAction(actionType,callback) {
        this.on(actionType, callback);
    }
}