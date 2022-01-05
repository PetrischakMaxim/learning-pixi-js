import Button from "./button.js";

const {Application, Loader} = PIXI;
const app = new Application({backgroundColor: 0x1099bb});

document.body.appendChild(app.view);

Loader.shared
    .add("default", "./images/button.png")
    .add("pressed", "./images/button-active.png")
    .add("over", "./images/button-hover.png")
    .load(setup);

function setup() {
    const {resources} = Loader.shared;

    const defaultTexture = resources.default.texture;
    const pressedTexture = resources.pressed.texture;
    const hoverTexture = resources.over.texture;

    const button = new Button({
        texture: defaultTexture
    });

    button.addAction('pointerdown', onButtonDown);
    button.addAction('pointerup', onButtonUp);
    button.addAction('pointerupoutside', onButtonDown);
    button.addAction('pointerover', onButtonOver);
    button.addAction('pointerout', onButtonOut);

    app.stage.addChild(button);

    function onButtonDown() {
        this.isdown = true;
        this.texture = pressedTexture;
    }

    function onButtonUp() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = hoverTexture;
        } else {
            this.texture = defaultTexture;
        }
    }

    function onButtonOver() {
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = hoverTexture;
    }

    function onButtonOut() {
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = defaultTexture;
    }




}


