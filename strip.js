var config = require('./config');
var ws281x = require('rpi-ws281x-native');

ws281x.init(config.NUM_LED);

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
        for (let i = 0; i < this.NUM_LEDS; i++) {
            this.Lights[i] = color;
        }
        this.Render();
    };

    this.rgb2Int = function(r, g, b) {
        return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
    };

    /*
    *   Set a single color for all LEDs
    */
    this.SetLightColor = function (lightIndex, r, g, b) {
        console.log('setLightColor', lightIndex, r, g, b);
        for (let i = 0; i < this.NUM_LEDS; i++) {
            if (i === lightIndex) {
                this.Lights[i] = 0xff0000;
            } else {
                this.Lights[i] = this.rgb2Int(0, 0, 0);
            }
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