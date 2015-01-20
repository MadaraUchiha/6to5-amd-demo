/**
 * Module defined normally with requireJS
 *
 * As you can see, ES6 syntax can still be used normally
 */

define(function() {
    var result = (function() {
        let doIknow = false; // Added new code with es6!
        let knowStr = doIknow ? 'know' : 'don\'t know';
        return 'I ' + knowStr + ' what the question is.';
    })();

    return result;
});