const fetch = require("node-fetch");
// import * as fetch from 'node-fetch';

export const getTweets = async term => {
  let string = "http://localhost:4005/" + term;
  let response;
  fetch(string, res => {
    response = res;
  });
  return await response;
};

export const sortTimes = (a, b) => {
  if (a.secondTime > b.secondTime) return -1;
  if (a.secondTime < b.secondTime) return 1;
  return 0;
};
