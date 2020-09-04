"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ray =
/*#__PURE__*/
function () {
  function ray(x1, y1) {
    _classCallCheck(this, ray);

    this.pos = createVector(x1, y1);
  }

  _createClass(ray, [{
    key: "show",
    value: function show() {
      stroke(255);
      line(this.pos.x, this.pos.y, mouseX, mouseY);
    }
  }]);

  return ray;
}();