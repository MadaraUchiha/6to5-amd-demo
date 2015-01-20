define(function() {
    let doIknow = false; // Added new code with es6!
    let knowStr = doIknow ? 'know' : 'don\'t know';
    return "I " + knowStr + " what the question is.";
});