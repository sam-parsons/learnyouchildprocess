const exercise = require('../../lib/basicExercise');

exercise.addSetup(function (mode, callback) {
  process.nextTick(callback);
});

module.exports = exercise;
