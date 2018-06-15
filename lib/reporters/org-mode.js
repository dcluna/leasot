const os = require('os');
const _ = require('lodash/array');
const defaults = require('lodash/defaults');

const reporter = (todos, config) => {
    const mapTodo = (el, i) => {
        return '* ' + el.kind + ' ' + el.text + os.EOL + '[[file:./' + el.file + '::' +el.line  + ']]';
    };
    const header = "#+TODO: " + _.uniq(todos.map((el) => el.kind)).join(' | ');
    return ( [header].concat( todos.map(mapTodo)) ).join(os.EOL);
};

module.exports = reporter;
