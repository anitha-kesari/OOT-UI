cordova.define("hu.dpal.phonegap.plugins.SpinnerDialog.SpinnerDialog", function(require, exports, module) { var exec = require('cordova/exec');

var spinnerDialog = {

	show : function(title, message, cancelCallback) {
        if (cancelCallback == true && typeof cancelCallback !== "function") {
            cancelCallback = function () {};  
        }
        cordova.exec(cancelCallback, null, 'SpinnerDialog', 'show', [ title, message, !!cancelCallback ]);
    },


    hide : function(success, fail) {
        cordova.exec(success, fail, 'SpinnerDialog', 'hide', [ "","" ]);
    }

};

module.exports = spinnerDialog;
});
