"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pendingScripts = [];
var pendingCallbacks = [];
var needsProcess = false;

/*
 * Process math in a script node using MathJax.
 */
function process(MathJax, script, callback) {
    pendingScripts.push(script);
    pendingCallbacks.push(callback);
    if (!needsProcess) {
        needsProcess = true;
        setTimeout(function () {
            return doProcess(MathJax);
        }, 0);
    }
}

function doProcess(MathJax) {
    MathJax.Hub.Queue(function () {
        var oldElementScripts = MathJax.Hub.elementScripts;
        MathJax.Hub.elementScripts = function (element) {
            return pendingScripts;
        };

        try {
            return MathJax.Hub.Process(null, function () {
                // Trigger all of the pending callbacks before clearing them
                // out.
                pendingCallbacks.forEach(function (callback) {
                    callback();
                });

                pendingScripts = [];
                pendingCallbacks = [];
                needsProcess = false;
            });
        } catch (e) {
            // IE8 requires `catch` in order to use `finally`
            throw e;
        } finally {
            MathJax.Hub.elementScripts = oldElementScripts;
        }
    });
}

exports.default = process;