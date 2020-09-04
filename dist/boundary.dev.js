"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var boundary =
/*#__PURE__*/
function () {
  function boundary(x1, y1, x2, y2) {
    _classCallCheck(this, boundary);

    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
  }

  _createClass(boundary, [{
    key: "show",
    value: function show() {
      stroke(255);
      line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
  }]);

  return boundary;
}();