/*******************************
    animation control
*******************************/
    var common = require("./common.js");
    var name = "control.js";

    function control() {

        this.Stop = function(args, strip) {
            strip.SetStripColor(0);
            strip.Mode = "STOP";
            console.log("Stopped strip");
        };

        this.Single = function(args, strip) {
            strip.SetLightColor(0, 130, 174, 188);
            strip.SetBrightness(100);
            strip.Mode = "FOO";
            console.log("set single color");
        };
    }

module.exports = new control();