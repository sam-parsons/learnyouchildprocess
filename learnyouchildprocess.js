#!/usr/bin/env node

const workshopper = require('workshopper-adventure'),
  path = require('path');

function fpath(f) {
  return path.join(__dirname, f);
}
const exerciseDir = fpath('./exercises/');

const shop = workshopper({
  name: 'learnyouchildprocess',
  title: 'LEARNYOUCHILDPROCESS',
  appDir: __dirname,
  exerciseDir: exerciseDir,
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer'),
  fail: require('workshopper-adventure/default/fail'),
  pass: require('workshopper-adventure/default/pass'),
});

require('./exercises/menu.json').forEach((name) => {
  shop.add(name);
});

module.exports = shop;
