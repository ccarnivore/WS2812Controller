var config = require('./config');
var ws281x = require('rpi-ws281x-native');

ws281x.init(config.NUM_LED);

var Lights = [];

function strip() {

    this.NUM_LEDS = config.NUM_LED;
    this.Mode = "";
    this.Lights = [];

    this.Clear = function () {
        ws281x.reset();
    };

    /*
    *   Clear all LEDs back to 0x00000 and render
    */
    this.Stop = function () {
        this.Clear();
        CurrentMode = MODES.CLEAR;
    };

    /*
    *   Assign the brightness of the whole strip.
    */
    this.SetBrightness = function (brightness) {
        ws281x.setBrightness(brightness);
    };

    /*
    *   Set a single color for all LEDs
    */
    this.SetStripColor = function (color) {
        for (var i = 0; i < this.NUM_LEDS; i++) {
            this.Lights[i] = color;
        }
        this.Render();
    };

    this.Render = function () {
        let tmp = [];
        for (let i = 0; i < this.NUM_LEDS; i++) {
            tmp[i] = this.Lights[i];
        }

        ws281x.render(tmp);
    };
}

module.exports = new strip();