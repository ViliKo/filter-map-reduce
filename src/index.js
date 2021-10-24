import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";

let cs = (x) => {
  console.log(x);
};

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

cs(numbers.map((x) => x + 2));

//Filter - Create a new array by keeping the items that return true.
cs(numbers.filter((x) => x < 10));

//Reduce - Accumulate a value by doing something to each item in an array.
cs(numbers.reduce((x) => x * x));
//Find - find the first item that matches from an array.
cs(numbers.find((x) => x === 3));

//FindIndex - find the index of the first item that matches.
cs(numbers.findIndex((x) => x === 2));

cs(emojipedia);

cs(emojipedia.map((x) => x.meaning.substr(0, 100)).toString());
