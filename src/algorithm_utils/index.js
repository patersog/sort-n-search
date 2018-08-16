const sort = require("./sort");
const search = require("./search");
const { array: t_array } = require("./data/array-data");

const algorithmMap = {
  search,
  sort
};

const testingData = {
  t_array
};

export { algorithmMap, testingData };
