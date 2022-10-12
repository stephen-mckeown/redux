import { createStore, compose, bindActionCreators } from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

embolden(repeatThreeTimes(makeLouder("hello")));

const makeLouderAndBoldAndRepeatThreeTimes = (string) =>
  embolden(repeatThreeTimes(makeLouder(string)));

const makeLouderAndBoldAndRepeatThreeTimesCompose = compose(
  embolden,
  repeatThreeTimes,
  makeLouder
);

console.log(makeLouderAndBoldAndRepeatThreeTimesCompose("hello world"))