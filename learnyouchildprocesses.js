#!/usr/bin/env node

const workshopper = require('workshopper'),
  path = require('path');

function fpath(f) {
  return path.join(__dirname, f);
}

workshopper({
  name: 'learnyouchildprocesses',
  title: 'learnyouchildprocesses',
  subtitle: 'Learn how to implement child processes in a variety of situations',
  appDir: __dirname,
  menuItems: [],
  exerciseDir: fpath('./exercises/'),
});
