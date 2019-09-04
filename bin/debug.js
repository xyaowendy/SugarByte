/**
 * @fileoverview This file serves as a debugging utility. It provides three categories
 * of debugging messages:
 *  1. Info ('INFO')
 *  2. Warning ('WARN')
 *  3. Error ('ERR')
 *
 * To show all messages, the message level can be set to 'ALL'.
 *
 * Errors raised within this module appear as 'Critical', and will show irregardless of
 * filtering.
 *
 * The printing can be toggled on or off, utilising a helper function.
 * @example var debug = require('users/henryburgess/csiro:debug');
 *          // Three types of messages.
 *          debug.info('Information message.');
 *          debug.warning('Warning message!');
 *          debug.error('Error message!');
 *
 *          // Turn printing on or off. 'true' represents on and 'false' represents off.
 *          debug.setDebugMode(true);
 *
 *          // Select the filter level to only show 'Error' messages.
 *          debug.setDebugLevel('ERR');
 *
 *          // Select the filter level to show all messages.
 *          debug.setDebugLevel('ALL');
 */

// Object to setup the module.
var debug = {};

// Categories of messages corresponding to message prefixes.
debug.categories = {
  // General information message.
  'INFO' : 'Info: ',
  // Warning message, could be used to indicate usage of deprecated function.
  'WARN' : 'Warning: ',
  // Error message, could be used to indicate invalid input.js.
  'ERR' : 'Error: ',
  // Critical message, used only by this module to indicated user errors.
  'CRIT' : 'Critical: '
};

// Flag to enable printing of the messages or not.
debug.enabled = true;

// Filter to set the level of message shown. Initially set to show all.
debug.level = 'ALL';

/**
 * A function that prints an information message to the console.
 *
 * @param {String} message - A string representing the text associated with the
 *        information message.
 * @param {Object} object - An optional parameter containing an Object associated with the
 *        information message.
 */
exports.info = function(message, object) {
  debug.out('INFO', message, object);
};

/**
 * A function that prints a warning message to the console.
 *
 * @param {String} message - A string representing the text associated with the
 *        warning message.
 * @param {Object} object - An optional parameter containing an Object associated with the
 *        warning message.
 */
exports.warning = function(message, object) {
  debug.out('WARN', message, object);
};

/**
 * A function that prints an error message to the console.
 *
 * @param {String} message - A string representing the text associated with the
 *        error message.
 * @param {Object} object - An optional parameter containing an Object associated with the
 *        error message.
 */
exports.error = function(message, object) {
  debug.out('ERR', message, object);
};

debug.critical = function(message, object) {
  debug.out('CRIT', message, object);
};

/**
 * A helper function that evaluates the message if required then prints it to the
 * console. It also prefixes the message with the corresponding category.
 *
 * @param {String} message - A string to be passed in as the message. If the string
 *        is actually a ee.ComputedObject, an attempt is made to evaluate it.
 * @param {String} category - A pre-defined dictionary key used to construct the printed
 *        message with the suitable prefix.
 * @param {Object} object - An optional parameter containing an Object associated with the
 *        message.
 */
debug.out = function(category, message, object) {
  if (debug.enabled === true) {
    if (typeof message === 'undefined') {
      print('Message not defined!');
    } else if (debug.level === 'ALL' || category === debug.level) {
      if (typeof object === 'undefined') {
        print(debug.categories[category], message);
      } else {
        print(debug.categories[category], message, object);
      }
    }
  }
};

/**
 * A helper function to toggle printing on and off.
 *
 * @param {Boolean} value - The value to set the debug.enabled flag.
 */
exports.setDebugMode = function(value) {
  if (value instanceof Boolean) {
    debug.enabled = value;
  } else {
    debug.critical('Provided value is not a Boolean!');
  }
};

/**
 * A helper function to filter the messages printed. At this stage can only be fixed on
 * a specific level or all.
 *
 * @param {String} level - A string of ['ALL', 'ERR', 'WARN', 'INFO'] to represent the level
 *        of message that is printed.
 */
exports.setDebugLevel = function(level) {
  if ((typeof debug.categories[level] !== 'undefined' || level === 'ALL') &&
      level !== 'CRIT') {
    debug.level = level;
  } else {
    debug.critical('Invalid level specified!');
  }
};
