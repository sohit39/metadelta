var constants    = require( './src/constants.js' );
var arithmetic   = require( './src/arithmetic.js');
var algebra      = require( './src/algebra.js'   );
var calculus     = require( './src/calculus.js'  );
var statistics   = require( './src/statistics.js');

/* CONSTANTS */
module.exports.E         = constants.E;
module.exports.PI        = constants.PI;
module.exports.TAU       = constants.TAU;

/* ARITHMETIC */
module.exports.abs       = arithmetic.abs;
module.exports.log       = arithmetic.log;
module.exports.sin       = arithmetic.sin;
module.exports.cos       = arithmetic.cos;
module.exports.tan       = arithmetic.tan;
module.exports.arccos    = arithmetic.arccos;
module.exports.arcsin    = arithmetic.arcsin;
module.exports.arctan    = arithmetic.arctan;
module.exports.exp       = arithmetic.exp;
module.exports.random    = arithmetic.random;

/* ALGEBRA */
module.exports.simplify  = algebra.simplify;
module.exports.factor    = algebra.factor;
module.exports.zeroes    = algebra.zeroes;
module.exports.solve     = algebra.solve;
module.exports.plug      = algebra.plug;

/* CALCULUS */
module.exports.derive    = calculus.derive;
module.exports.tangent   = calculus.tangent;
module.exports.integrate = calculus.integrate; // indefinite integral
module.exports.areaUnder = calculus.areaUnder; // definite integral

/* STATISTICS */
module.exports.bigSig = statistics.bigSig;
module.exports.max    = statistics.max;
module.exports.min    = statistics.min;
module.exports.mean   = statistics.mean;
module.exports.median = statistics.median;
module.exports.mode   = statistics.mode;

global.metadelta = module.exports;
