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

            strip.Mode = "FOO";
            console.log("set single color");
        };

        this.Box = function(args, strip) {
            strip.setBoxColor(args.boxIdent);

            strip.Mode = "BOX";
            console.log("set box color");
        };
    }

module.exports = new control();