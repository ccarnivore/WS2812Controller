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
            strip.SetLightColor(args.lightIndex, args.colorRed, args.colorGreen, args.colorBlue);
            strip.SetBrightness(args.brightness);
            strip.Mode = "FOO";
            console.log("set single color");
        };
    }

module.exports = new control();