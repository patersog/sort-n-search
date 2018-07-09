const sort = require("./sort");
const search = require("./search");
const { array: arrayData } = require("./data/array-data");

const algorithms = {
  search,
  sort
};

const test = {
  arrayData
};

export { algorithms, test };
