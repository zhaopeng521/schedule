/**
* Schedule.js 0.1.0
* (c) 2013 Bill, BunKat LLC.
* Later is freely distributable under the MIT license.
* For all details and documentation:
*     http://bunkat.github.com/later
*/

if(typeof module !== 'undefined' && module.exports) {
  this.later = require('later');
}

schedule = (function(later) {
  var schedule = {version: "0.6.0"}; // semver

  if(!later) throw new Error('Laterjs must be included before Schedulejs.');