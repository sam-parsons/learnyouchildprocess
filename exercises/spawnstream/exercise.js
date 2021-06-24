const exercise = require('../../lib/basicExercise');
const path = require('path');

const file = path.resolve(__dirname, './index.txt');

exercise.addSetup(function (mode, callback) {
  this.submissionArgs.unshift(file);
  this.solutionArgs.unshift(file);

  process.nextTick(callback);
});

module.exports = exercise;
