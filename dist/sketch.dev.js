"use strict";

var b;
var r;

function setup() {
  createCanvas(400, 400);
  b = new boundary(100, 100, 100, 200);
  r = new ray(width / 2, height / 2);
}

function draw() {
  background(0);
  b.show();
  r.show();
}