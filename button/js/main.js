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
    createButtonWithTexture();
    createDefaultButton();
}

function createButtonWithTexture() {
    const {resources} = Loader.shared;

    const defaultTexture = resources.default.texture;
    const pressedTexture = resources.pressed.texture;
    const hoverTexture = resources.over.texture;

    const button = new Button({
        texture: defaultTexture
    });

    button.addAction('click', onButtonClick);

    function onButtonClick() {
        this.updateTexture(pressedTexture)
    }

    app.stage.addChild(button);
}

function createDefaultButton() {

    const button = new Button({
        x: 200,
        y: 200,
        label: "Gore"
    });

    button.addAction('click', onButtonClick);

    function onButtonClick() {
        this.updateLabel('Click on button')
    }

    app.stage.addChild(button);
}


