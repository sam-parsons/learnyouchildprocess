const exercise = require('../../lib/basicExercise');

exercise.addSetup(function (mode, callback) {
  const data = 'Hello world';

  this.submissionArgs.unshift(data);
  this.solutionArgs.unshift(data);

  process.nextTick(callback);
});

module.exports = exercise;
