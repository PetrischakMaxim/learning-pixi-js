export default class Button extends PIXI.Container {

    constructor(options = {}) {
        super();
        this.options = this.setOptions(options);
        this.init();
    }

    setOptions(options) {
        const defaultOptions = {
            width: 120,
            height: 40,
            texture: null,
            x: 0,
            y: 0,
            fill: 0xFF3300,
            label: 'Default Button',
            labelStyle: {
                fill: '#ffffff',
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
            },
            disabled: false,
            active: false,
            visible: true
        };

        return {...defaultOptions, ...options};
    }

    init() {
        this.element = null;
        this.buttonMode = true;
        this.interactive = true;
        this.x = this.options.x;
        this.y = this.options.y;
        this.width = this.options.width;
        this.height= this.options.height;
        this.visible = this.options.visible;
        this.active = this.options.active;
        this.disabled = this.options.disabled;

        if(this.options.texture) {
            this.drawTexture(this.options.texture);
            return;
        }

        this.drawGraphics();
    }

    drawTexture(texture) {
        this.element = new PIXI.Sprite(texture);
        this.addChild(this.element);
    }

    drawGraphics() {
        this.element = new PIXI.Graphics();
        this.element.beginFill(this.options.fill);
        this.element.drawRect(this.options.x, this.options.x, this.options.width, this.options.height);
        this.element.endFill();

        if(this.options.label) {
            this.addLabel();
        }
        this.addChild(this.element);
    }

    addLabel() {
        this.label = new PIXI.Text(this.options.label, this.options.labelStyle);
        this.label.anchor.set(0.5);
        this.element.addChild(this.label);
    }

    updateLabel(label) {
        this.label.text = label;
    }

    updateTexture(texture) {
        this.element.texture = texture;
    }

    addAction(actionType, callback) {
        this.on(actionType, callback);
    }
}