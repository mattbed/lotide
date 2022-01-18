# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mattbed/lotide`

**Require it:**

`const _ = require('@mattbed/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([...])`: Retrieves the first element of an input array.
* `tail([...])`: Retrieves the remaining elements (after the first) of an array.
* `middle([...])`: Retrieves the middle elements of an array.
* `countLetters('...')`: Counts the instances of each letter that appears in a given string.
* `countOnly([...], {...})`: Given an array and an object with boolean values, will count only the truthy values from the object that appear in the array.
* `findKey({...}, callback())`: Returns the first key that returns a truthy value for a given callback function.
* `findKeyByValue({...}, var)`: Returns a key from a given object that corresponds with a given value.
* `letterPositions('...')`: Returns a list of indices for each letter occurence in a given string.
* `map([...], callback())`: Applies a callback function to a given array.
* `takeUntil([...], callback())`: Returns an array up until a point provided by a callback function.
* `without([...], [...])`: Removes items listed in the second array from the first array, returning a new array.
* `assertArraysEqual([...], [...])`: Compare two arrays for a perfect match and outputs a colourful assertion message.
* `assertEqual(var1, var2)`: Compare two values and outputs a colourful assertion message.
* `assertObjectsEqual({...}, {...})`: Compare two objects and outputs a colourful assertion message.
* `eqArrays([...],[...])`: Compares two arrays for a perfect match.
* `eqObjects({...}, {...})`: Compare two objects for a perfect match.