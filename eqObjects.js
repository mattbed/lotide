const assertEqual = require('./assertEqual.js');
const eqArrays = require('./eqArrays.js');

// Returns true if both objects have identical keys with identical values
// Otherwise you get false
const eqObjects = function(object1, object2) {
  // first check length of the objects, return false if mismatched
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // create a loop to cycle through one of the objects
  const compareObjects = function(object1, object2) {
    for (let keys of Object.keys(object1)) {
    //   edge case not covered - object/arrays within an array. Would need to refactor eqArrays.
    //   check to see if both are arrays, if true run eqArrays to compare them and return the outcome
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        return eqArrays(object1[keys], object2[keys]);
      };
      if (typeof object1[keys] === "object" && typeof object2[keys] === "object") {
        return compareObjects(object1[keys], object2[keys]);
      };
    //   // check two properties against each other - if they do not match, return false.
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    //   // since we are cycling through an entire object, that has the same length as the other object
    //   // it will check all possible key matches, if there is a single key that is mismatched it will be flagged
    //   // if no keys mismatch, then all keys must be matching and it defaults to return true.
    }
    return true;

  }
  return compareObjects(object1, object2);
};


//test case
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);

const ef = { e: ["1"], f: ["2", 3] };
const fe = { f: ["2", 3], e: ["1"] };
assertEqual(eqObjects(ef, fe), true);

const ef2 = { e: "1", f: ["2", 3] };
assertEqual(eqObjects(ef, ef2),false);

const gh = { a: { z: 1 }, b: 2 };
const hg = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(gh, hg), true);

const ij = { a: { y: 0, z: 1 }, b: 2 };
const ji = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(ij, ji), false);

const kl = { a: { y: 0, z: 1 }, b: 2 };
const lk = { a: 1, b: 2 };
assertEqual(eqObjects(kl, lk), false);

const mn = {a: { b: { y: 0, z: [2, 3, 4]}}, c: 3};
const nm = {c: 3, a: { b: { y: 0, z: [2, 3, 4]}}};
assertEqual(eqObjects(mn, nm), true);