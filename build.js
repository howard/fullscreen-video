#!/usr/bin/env node

const fs = require('fs');
const Mustache = require('mustache/mustache');
const Minifier = require('html-minifier');

const configPath = process.argv.length > 2 ? process.argv[2] : 'config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const template = fs.readFileSync('index.html.mustache', 'utf8');

const prettyHtml = Mustache.render(template, config);

console.log(Minifier.minify(prettyHtml, {
    'collapseWhitespace': true,
    'minifyJS': true,
    'minifyCSS': true
}));