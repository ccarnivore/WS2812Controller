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
            strip.SetLightColor(0, 128, 128, 0);
            strip.Mode = "FOO";
            console.log("set single color");
        };
    }

module.exports = new control();