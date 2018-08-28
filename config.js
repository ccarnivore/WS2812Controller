// number of leds in trip
let NUM_LED = 20;

// box config array
let BOX_CONFIG = {
    "0001": [0, 1, 2, 3],
    "0002": [4, 5, 6, 7],
    "0003": [8, 9, 10, 11],
    "0004": [12, 13, 14, 15],
    "0005": [16, 17, 18, 19]
};

let BOX_COLOR = 0xff0000;

// CONFIG EXPORTS
module.exports = {
    NUM_LED: NUM_LED,
    BOX_CONFIG: BOX_CONFIG,
    BOX_COLOR: BOX_COLOR
};