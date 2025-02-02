module.exports.pipe = require('pump')
module.exports.merge = require("multi-duplex-stream")
module.exports.condition = require("ternary-stream")
module.exports.each = require('stream-each')
module.exports.filter = require("through2-filter")
module.exports.map = require("through2-map")
module.exports.reduce = require("through2-reduce")
module.exports.spy = require("through2-spy")
module.exports.split = require("split2")
module.exports.pipeline = require('pumpify')
module.exports.duplex = require('duplexify')
module.exports.through = require('through2')
module.exports.concat = require('concat-stream')
module.exports.finished = require('end-of-stream')
module.exports.unique = require("unique-hash-stream")
module.exports.child = require("duplex-child-process")

module.exports.stringify = require("streaming-json-stringify")
module.exports.toJSON = require("stream-to-json")

module.exports.to = require('flush-write-stream')
module.exports.toArray = require("stream-to-array")
module.exports.toString = require("stream-to-string")
module.exports.toPromise = require("stream-to-promise2")
module.exports.toObservable = require("rx-node").fromStream

module.exports.from = require('from2')
module.exports.fromPromise = require("stream-from-promise")
module.exports.fromObservable = require("rx-node").writeToStream

var Throttle = require("throttle");
module.exports.throttle = function (n) {
  return new Throttle(n);
}

module.exports.Parser = require('stream-parser')

module.exports.balance = require("stream-balance")
