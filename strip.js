import NUM_LEDS from "./config";
import ws281x from 'rpi-ws281x-native';

ws281x.init(NUM_LEDS);

function strip() {
    this.Lights = [];

    this.Clear = function () {
        ws281x.reset();
    };

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
        for (var i = 0; i < NUM_LEDS; i++) {
            this.Lights[i] = color;
        }

        this.Render();
    };

    this.Render = function () {
        var tmp = [];
        for (var i = 0; i < NUM_LEDS; i++) {
            if (i > NUM_LEDS) break;
            tmp[i] = this.Lights[i];
        }
        ws281x.render(tmp);
    };
}

module.exports = new strip();